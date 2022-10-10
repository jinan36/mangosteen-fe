import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import {
  toEscapedSelector as e,
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import svgstore from './src/plugins/vite/svgstore'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development'
  return {
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
            /^custom-(.+)$/,
            (
              [, name],
              { rawSelector },
            ) => {
            // discard mismatched rules
              if (!name.includes('scroll-hide'))
                return

              // if you want, you can disable the variants for this rule
              // if (variantHandlers.length) return;
              const selector = e(rawSelector)
              // return a string instead of an object
              return `
            ${selector}::-webkit-scrollbar {
              display: none;
            }
            `
            },
          ],
        ],
        shortcuts: [
          [
            /^flex-(around|between|center|end|evenly|inherit|initial|revert|revert-layer|start|unset)-(baseline|center|end|inherit|initial|revert|revert-layer|start|stretch|unset)$/,
            ([, c1, c2]) => `justify-${c1} items-${c2}`,
          ],
        ],
        theme: {
          boxShadow: {
            formInputInner: 'inset 0 0 3px var(--input-shadow)',
          },
          fontFamily: {
            emoji: [
              '"Twemoji Mozilla"',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
              '"EmojiOne Color"',
              '"Android Emoji"',
              'sans-serif',
            ],
          },
        },
      }),
      svgstore(),
      createStyleImportPlugin({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: name => `../es/${name}/style`,
          },
        ],
      }),
    ],
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
        localsConvention: 'camelCase',
      },
    },
  }
})
