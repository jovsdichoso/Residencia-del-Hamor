import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Residencia-del-Hamor/', // GitHub Pages URL path
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Ensures a clean build
  },
})
