import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-tests.js",
    coverage: {
      provider: "v8",
      exclude: ["src/setup-tests.ts"],
    },
  },
});
