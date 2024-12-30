import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "MovixTar",
        short_name: "Movix",
        description: "MovieApp",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/logoM.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logoM.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
