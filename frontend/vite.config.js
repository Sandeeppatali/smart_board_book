import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://vercel-test-bice-iota.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "./", // Ensures assets use relative paths
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ["frontend-4-qajc.onrender.com"], // keep your setting
  },
});
