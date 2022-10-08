import { defineComponent } from 'vue'

export const Button = defineComponent({
  setup(_, { slots }) {
    return () => (
      <button
        border="~ $button-bg rd-$button-radius"
        p="y8px x16px"
        bg="$button-bg"
        text="$button-text size-$button-font-size"
        h="$button-height"
      >
        {slots.default?.()}
      </button>
    )
  },
})
