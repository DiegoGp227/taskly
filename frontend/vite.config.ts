import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5db5-190-25-164-252.ngrok-free.app'], // <-- aquí permites ngrok
  },
})
