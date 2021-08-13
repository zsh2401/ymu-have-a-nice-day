import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
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
