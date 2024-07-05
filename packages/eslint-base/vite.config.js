import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.cjs"),
      name: "leye195-eslint-config",
      fileName: "index",
      formats: ["es", "cjs"],
    },
  },
});
