import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
   base: './',
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'src'),
      },
   },
   // build: {
   //    outDir: 'dist'
   // },
   plugins: [vue()],
   server: {
      https: false, // 是否开启https
      open: true,  // 是否自动在浏览器打开
      port: 3000,   // 端口号
   },
})