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
      shortcuts: [
        [
          /^flex-(around|between|center|end|evenly|inherit|initial|revert|revert-layer|start|unset)-(baseline|center|end|inherit|initial|revert|revert-layer|start|stretch|unset)$/,
          ([, c1, c2]) => `justify-${c1} items-${c2}`,
        ],
      ],
    }),
    svgstore(),
  ],
});
