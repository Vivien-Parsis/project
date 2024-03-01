import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(),svgLoader()],
  server:{
    port:8000,
    host:true,
    watch: {
      usePolling: true
    }
  }
})