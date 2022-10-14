import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const Button = defineComponent({
  name: 'BasicButton',
  props: {
    level: {
      type: String as PropType<'important' | 'normal' | 'danger'>,
      default: 'important',
    },
    attrType: {
      type: String as PropType<'submit' | 'reset' | 'button'>,
    },
  },
  setup(props, { slots }) {
    const levelClassMap = {
      important: '',
      normal: 'border-color-$button-bg bg-white c-$button-bg!',
      danger: 'border-color-$button-bg-danger bg-$button-bg-danger',
    }

    return () => (
      <button
        class={['border-$button-bg bg-$button-bg c-$button-text', levelClassMap[props.level]]}
        border="~ rd-$button-radius"
        p="y8px x16px"
        text="size-$button-font-size"
        h="$button-height"
        type={props.attrType}
      >
        {slots.default?.()}
      </button>
    )
  },
})
