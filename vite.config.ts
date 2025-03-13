import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import Inspect from "vite-plugin-inspect";
// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom", // Use jsdom for DOM testing
    globals: true, // Enable global test functions (describe, it, expect, etc.)
  },
  plugins: [react(), tailwindcss(), Inspect()],
  base: "/github-user-search",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
