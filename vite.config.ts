import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { VantResolver } from '@vant/auto-import-resolver';
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, 'src');
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [VantResolver()],
        dirs: ['./src/components'],
        dts: path.resolve(pathSrc, 'auto-import.d.ts')
      }),
      Components({
        dirs: ['./src/components'],
        dts: path.resolve(pathSrc, 'components.d.ts'),
        resolvers: [VantResolver()]
      })
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
