import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: './',
    publicDir: 'public',
    resolve: {
        alias: {
            '@locales': path.resolve(__dirname, 'public/locales'),
        }
    },
    build: {
        outDir: '../',
        emptyOutDir: false,
    }
})
