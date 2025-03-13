import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Inspect from "vite-plugin-inspect";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), Inspect()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
