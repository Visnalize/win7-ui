import { fileURLToPath, URL } from "node:url";

import vue2 from "@vitejs/plugin-vue2";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  let plugins = [];

  return {
    build: {
      lib: {
        entry: "./src/index.js",
        name: "WinUI",
        fileName: "index",
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          dir: "lib",
        },
      },
    },
    plugins: [vue2(), ...plugins],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
