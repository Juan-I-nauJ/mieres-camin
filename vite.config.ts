import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/scss/_variables.scss" as *;`,
      },
    },
  },
  plugins: [vue()],
})
