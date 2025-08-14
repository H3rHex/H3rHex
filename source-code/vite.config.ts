import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base:'./',
    publicDir: "public",
    build: {
        outDir: '../',
        emptyOutDir: false,
    }
})
