import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// vite.config.js
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: { 
        https: false, 
        host: 'localhost', 
    }, 
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        
    ],
});
