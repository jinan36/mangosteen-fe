import { defineComponent } from 'vue'
import { Navbar } from '../shared/Navbar'

export const MainLayout = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div relative="~">
        <Navbar sticky="~" top="0">
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
