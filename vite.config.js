import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to allow external access
    port: process.env.PORT || 5173, // Use the PORT environment variable or default to 5173
  },
})
