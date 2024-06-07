import { defineConfig } from 'vite';
import { resolve } from 'path';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './resources/js'),
            '@components': resolve(__dirname, './resources/js/components'),
            '@pages': resolve(__dirname, './resources/js/pages'),
            '@composables': resolve(__dirname, './resources/js/composables'),
            '@images': resolve(__dirname, './public/images'),
        },
    },
});
