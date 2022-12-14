import { defineComponent } from 'vue'
import { Charts } from '../components/statistics/Charts'
import { TimeTabsLayout } from '../layouts/TimeTabsLayout'

export const StatisticsPage = defineComponent({
  name: 'StatisticsPage',
  setup() {
    return () => <TimeTabsLayout component={Charts} />
  },
})
