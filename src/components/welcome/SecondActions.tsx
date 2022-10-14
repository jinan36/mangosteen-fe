import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'
import { Actions } from './Actions'

export const SecondActions = defineComponent({
  name: 'SecondActions',
  setup() {
    return () => (
      <Actions>
        <RouterLink invisible="~" to="/start">
          跳过
        </RouterLink>
        <RouterLink to="/welcome/3">下一页</RouterLink>
        <RouterLink to="/start" replace>
          跳过
        </RouterLink>
      </Actions>
    )
  },
})
