import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config with proxy for /api -> backend (localhost:4000)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
