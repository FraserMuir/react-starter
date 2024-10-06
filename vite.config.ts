/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["lcov", "text"],
      exclude: ["node_modules/", "dist/", "coverage/"],
    },
  },
});
