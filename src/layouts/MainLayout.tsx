import { defineComponent } from 'vue'
import { Navbar } from '../shared/Navbar'

export const MainLayout = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div relative="~">
        <Navbar sticky="~" top="0" z="1">
          {{
            default: () => slots.title?.(),
            icon: () => slots.icon?.(),
          }}
        </Navbar>
        {slots.default?.()}
      </div>
    )
  },
})
