import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@app/store': path.resolve(__dirname, 'src/store'),
      '@app/models': path.resolve(__dirname, 'src/models'),
      '@app/services': path.resolve(__dirname, 'src/services')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/main";`
      }
    }
  }
})
