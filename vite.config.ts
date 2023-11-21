import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

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
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),
    ],
    resolve: {
      alias: {
        '@': pathSrc
      }
    }
  }
})
