import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        file: "dist/vue-elements.js",
        dir: undefined, // to avoid "Invalid value for option "output.dir" - you must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks." error
      },
    },
  },
});
