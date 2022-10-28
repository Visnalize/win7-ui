import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let options = {};
  let plugins = [];

  if (mode === "lib") {
    options = {
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
    };
  }

  if (mode === "docs") {
    plugins = [
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ];
  }

  return {
    ...options,
    plugins: [vue2(), ...plugins],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
