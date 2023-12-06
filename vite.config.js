// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5174",
    },
  },
  build: {
    outDir: "dist",
    assetsInclude: [
      "src/server.js",
      "src/server/Api.jsx",
      "src/server/controller.js",
      "src/server/bd.js",
      "src/server/routes.js",
    ],
  },
});
