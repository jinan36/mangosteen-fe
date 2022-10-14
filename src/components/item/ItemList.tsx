import { defineComponent } from 'vue'
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout'
import { ItemSummary } from './ItemSummary'

export const ItemList = defineComponent({
  name: 'ItemList',
  setup() {
    return () => <TimeTabsLayout component={ItemSummary}></TimeTabsLayout>
  },
})
