import fs from 'fs'
import path from 'path'
import store from 'svgstore'
import { optimize } from 'svgo'

interface Options {
  inputFolder?: string
  inline?: boolean
}

const svgStore = (options: Options = {}) => {
  const inputFolder = options.inputFolder || 'src/assets/icons'
  return {
    name: 'svg-store',
    resolveId(id: string) {
      if (id === 'svg.store')
        return 'svg_bundle.js'
    },
    load(id: string) {
      if (id === 'svg_bundle.js') {
        const sprites = store(options)
        const iconsDir = path.resolve(inputFolder)
        for (const file of fs.readdirSync(iconsDir)) {
          const filepath = path.join(iconsDir, file)
          const svgId = path.parse(file).name
          const code = fs.readFileSync(filepath, { encoding: 'utf-8' })
          sprites.add(svgId, code)
        }
        const { data: code } = optimize(
          sprites.toString({ inline: options.inline }),
          {
            plugins: [
              'cleanupAttrs',
              'removeDoctype',
              'removeComments',
              'removeTitle',
              'removeDesc',
              'removeEmptyAttrs',
              {
                name: 'removeAttrs',
                params: { attrs: '(data-name|data-xxx)' },
              },
            ],
          },
        )

        return `const div = document.createElement('div')
                div.innerHTML = \`${code}\`
                const svg = div.getElementsByTagName('svg')[0]
                if (svg) {
                    svg.style.position = 'absolute'
                    svg.style.width = 0
                    svg.style.height = 0
                    svg.style.overflow = 'hidden'
                    svg.setAttribute("aria-hidden", "true")
                }
                // listen dom ready event
                document.addEventListener('DOMContentLoaded', () => {
                    if (document.body.firstChild) {
                        document.body.insertBefore(div, document.body.firstChild)
                    } else {
                        document.body.appendChild(div)
                    }
                })`
      }
    },
  }
}
export default svgStore
