import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User page (karansurana.github.io) serves from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
