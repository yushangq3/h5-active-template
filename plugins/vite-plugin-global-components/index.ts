// vite-plugin-dts/index.ts
import fs from 'node:fs';
import path from 'node:path';
import { Plugin } from 'vite';

interface GlobalComponentsPluginOptions {
  dirs: string[];
  dts: string;
}

function getComponentNameFromPath(filePath: string) {
  const componentName = path.basename(filePath, '.vue');
  const parentDir = path.basename(path.dirname(filePath));

  if (componentName === 'index' && parentDir !== 'components') {
    return parentDir
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }

  return componentName.charAt(0).toUpperCase() + componentName.slice(1);
}

function generateDeclarationFile(dirs: string[], dts: string) {
  let declarationContent = `
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
export {}
declare global {`;

  function scanComponentFiles(dir: string) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.resolve(dir,file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanComponentFiles(filePath); // Recursively scan subdirectories
      } else if (file.endsWith('.vue')) {
        const componentName = getComponentNameFromPath(filePath);
        const relativePath = './'+path.relative(path.dirname(dts), filePath).replace(/\\/g, '/')
        declarationContent += `
  const ${componentName}: typeof import('${relativePath}')['default'];`;
      }
    }
  }

  for (const dir of dirs) {
    const absoluteDir = path.resolve(process.cwd(), dir);
    scanComponentFiles(absoluteDir);
  }

  declarationContent += `
}`;

  fs.writeFileSync(dts, declarationContent);
}

export default function GlobalComponentsPlugin(options: GlobalComponentsPluginOptions): Plugin {
  return {
    name: 'global-components-plugin',
    async writeBundle(_options, bundle) {
      console.log(options.dts, 'dtsPath');
      try {
        const dtsDir = path.dirname(options.dts);
        if (!fs.existsSync(dtsDir)) {
          fs.mkdirSync(dtsDir, { recursive: true });
        }

        await generateDeclarationFile(options.dirs, options.dts);
        console.log('声明文件生成成功！');
      } catch (err) {
        console.error('生成声明文件时出错：', err);
      }
    },
  };
}