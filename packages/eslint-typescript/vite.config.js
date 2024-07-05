import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.cjs"),
      name: "danyj-eslint-config-ts",
      fileName: "index",
      formats: ["es", "cjs"],
    },
  },
});
