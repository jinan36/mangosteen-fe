import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import {
  presetUno,
  presetAttributify,
  transformerAttributifyJsx,
} from "unocss";
import svgstore from "./src/plugins/vite/svgstore";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx({}),
    Unocss({
      presets: [presetUno(), presetAttributify()],
      transformers: [transformerAttributifyJsx()],
      rules: [
        [
          /^flex-([a-z]+)-([a-z]+)$/,
          (match) => ({
            "justify-content": match[1],
            "align-items": match[2],
          }),
        ],
      ],
    }),
    svgstore(),
  ],
});
