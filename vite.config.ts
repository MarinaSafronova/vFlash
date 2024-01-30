import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'staticwebapp.config.json', dest: 'dist' }
      ],
      hook: 'writeBundle',
    }),
  ],
  // Set the base to "/" for deploying at the root path or to your specific sub-path
  base: "/", // Adjust this based on your deployment path
})
