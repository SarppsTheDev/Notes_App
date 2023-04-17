import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/Notes_App/`, //The base url of the host website
  plugins: [react()],
})
