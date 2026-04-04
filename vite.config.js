import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is set to '/' for custom domains, or './' for gh-pages subfolders
  base: '/',
  build: {
    outDir: 'dist',
    // Using default esbuild minifier is safer in Vite 8 unless you specifically need Terser
    minify: 'esbuild', 
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React Core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('react-router')) {
            return 'router';
          }
          // Framer Motion
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }
        },
      },
    },
  },
})