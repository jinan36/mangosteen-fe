import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export const TagPage = defineComponent({
  name: 'TagPage',
  setup() {
    return () => <RouterView />
  },
})
