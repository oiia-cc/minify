import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with '/api' to a backend server
      '/api': {
        target: 'http://localhost:3333', // The URL of your backend server
        changeOrigin: true, // Changes the origin of the host header to the target URL
      },
    }
  }
})
