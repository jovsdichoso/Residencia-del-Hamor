import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Residencia-del-Hamor/',
  build: {
    outDir: 'dist', // Output folder for the build
  },
  publicDir: 'public', // Ensure Vite serves the public folder
})
