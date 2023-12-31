import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/users": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        secure: false
      },
      "/socket": {
        target: "http://127.0.0.1:4000",
        changeOrigin: true,
        secure: false,
        ws: true
      },
    },
  },
  plugins: [react()],
})
