import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'
import { Actions } from './Actions'

export const FourthActions = defineComponent({
  name: 'FourthActions',
  setup() {
    return () => (
      <Actions>
        <RouterLink invisible="~" to="/start">
          跳过
        </RouterLink>
        <RouterLink to="/start" replace>
          完成
        </RouterLink>
        <RouterLink invisible="~" to="/start">
          跳过
        </RouterLink>
      </Actions>
    )
  },
})
