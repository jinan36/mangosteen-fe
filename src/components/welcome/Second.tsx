import { defineComponent } from 'vue'
import { Card } from './Card'

export const Second = defineComponent({
  name: 'Second',
  setup() {
    return () => (
      <Card>
        <svg>
          <use xlinkHref="#clock"></use>
        </svg>
        <h2 m="t40px">
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      </Card>
    )
  },
})
