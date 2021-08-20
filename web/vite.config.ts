import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),

    VitePWA({
      manifest: {
        name: "完美校园",
        short_name: "完美校园",
        icons: [
          {
            "src": "/icon.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/index.html",
        display: "standalone"
      },
      workbox: {
        skipWaiting: true
      }
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },

  esbuild: {
    define: {
      CTIME: JSON.stringify(new Date().toString())
    }
  }
  
})
