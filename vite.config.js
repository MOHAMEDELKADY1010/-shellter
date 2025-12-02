
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/-shellter/",
  watch: {
    usePolling: true,
    interval: 100,
  },
  plugins: [react({
    include: ['**/.jsx', '*/*.tsx'],
  })],
})