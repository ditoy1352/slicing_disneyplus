import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
  resolve: {
    alias: {
      // Fix Swiper CSS import issue
      'swiper/css': 'swiper/swiper.css',
      'swiper/css/navigation': 'swiper/modules/navigation.css',
      'swiper/css/pagination': 'swiper/modules/pagination.css',
    }
  },
})
