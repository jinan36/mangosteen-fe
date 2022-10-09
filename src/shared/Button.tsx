import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
    level: {
      type: String as PropType<'important' | 'normal' | 'danger'>,
      default: 'important',
    },
  },
  setup(props, { slots }) {
    const levelClassMap = {
      important: '',
      normal: '',
      danger: 'border-$button-bg-danger bg-$button-bg-danger',
    }

    return () => (
      <button
        class={['border-$button-bg bg-$button-bg', levelClassMap[props.level]]}
        border="~ rd-$button-radius"
        p="y8px x16px"
        text="$button-text size-$button-font-size"
        h="$button-height"
      >
        {slots.default?.()}
      </button>
    )
  },
})
