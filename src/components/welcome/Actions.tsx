import { defineComponent } from 'vue'

export const Actions = defineComponent({
  name: 'Actions',
  setup(_, { slots }) {
    return () => (
      <div
        fixed="~"
        z="$z-index-bottom-nav"
        left="0"
        bottom="0"
        bg="$welcome-bg-end"
        w="full"
        flex="~"
        justify="between"
        items="center"
        text="24px"
        h="$welcome-nav-height"
        p="x16px"
        c="$welcome-text"
        pb="$welcome-nav-gap"
      >
        {slots.default?.()}
      </div>
    )
  },
})
