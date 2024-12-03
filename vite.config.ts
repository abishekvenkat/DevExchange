import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'os','js-big-decimal'],
  },
  server: {
    port: 5665,
  },
  define: {
    'process.env': {}
  }
});
