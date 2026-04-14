import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router') || id.includes('/react/') || id.includes('/react-dom/') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('react-icons')) {
              return 'ui-vendor';
            }
            if (id.includes('three') || id.includes('@react-three') || id.includes('maath')) {
              return 'three-vendor';
            }
            return 'vendor';
          }
          if (id.includes('/src/pages/')) {
            const match = id.match(/\/src\/pages\/([^/]+?)\.jsx?$/);
            if (match) return `page-${match[1].toLowerCase()}`;
          }
        },
        assetFileNames: (assetInfo) => {
          // Cache-friendly asset naming with content hash
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    origin: 'https://capwallet.onrender.com',
  },
  preview: {
    port: 4173,
    host: true,
  },
})