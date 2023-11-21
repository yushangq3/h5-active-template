import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import GlobalComponentsPlugin from './plugins/vite-plugin-global-components';
// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, 'src');
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dirs: ['./src/components'],
        dts: path.resolve(pathSrc, 'auto-import.d.ts')
      }),
      Components({
        dirs: ['./src/components'],
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),
      GlobalComponentsPlugin({
        dirs: ['./src/components'], // 存放组件的文件夹路径
        dts: path.resolve(pathSrc, 'globalComponents.d.ts'), // 输出声明文件的路径
      }),
    ],
    resolve: {
      alias: {
        '@': pathSrc
      }
    },
    server: {
      proxy: {
        '/api/open': {
          target: 'https://api.weiaon.cn',
          changeOrigin: true,
        }
      }
    }
  }
})
