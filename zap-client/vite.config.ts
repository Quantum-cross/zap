import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: react(),
    server: {
        host: '10.10.42.1',
        port: 8000,
        strictPort: true,
    }
})
