import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export const ItemPage = defineComponent({
  name: 'ItemPage',
  setup() {
    return () => <RouterView />
  },
})
