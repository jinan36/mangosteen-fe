import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export type IconNames =
  | 'add'
  | 'chart'
  | 'clock'
  | 'cloud'
  | 'mangosteen'
  | 'pig'
  | 'menu'
  | 'charts'
  | 'notify'
  | 'export'
  | 'left'
  | 'date'
  | 'backspace'
  | 'brush'

export const Icon = defineComponent({
  name: 'Icon',
  props: {
    name: { type: String as PropType<IconNames>, required: true },
  },
  setup(props) {
    return () => (
      <svg w="1.2em" h="1.2em">
        <use xlinkHref={`#${props.name}`} />
      </svg>
    )
  },
})
