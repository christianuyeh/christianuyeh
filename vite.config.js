import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
     server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        cors: {
            origin: ['http://christianuyeh.test'], // Allow Laravel's domain
            credentials: true
        }
    }
});
