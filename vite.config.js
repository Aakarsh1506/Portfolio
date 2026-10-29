import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,   // fail if port 3000 is busy, instead of switching ports
    host: true,         // listen on your local network, so phones on the same Wi-Fi can open the site
    open: true,         // open the browser on npm run dev
    allowedHosts: true, // accept requests from tunnel domains like ngrok or Cloudflare
  },
})