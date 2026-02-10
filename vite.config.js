import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer' // Importante: instalalo antes

export default defineConfig({
  plugins: [
    vue(),
    // Genera un mapa visual de qué archivos pesan más al hacer build
    visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // ESTRATEGIA DE RENDIMIENTO: Manual Chunking
        // Separa las librerías (Vue, Router) del código de tu negocio
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})