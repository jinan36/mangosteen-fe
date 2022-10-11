import { defineComponent } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'

export const ItemList = defineComponent({
  setup() {
    const selected = $ref('本月')
    return () => <MainLayout>{
      {
        title: () => '山竹记账',
        icon: () => <Icon w="30px" h="30px" name="menu" />,
        default: () => (
          <Tabs v-model:selected={selected} shrink={true}>
            <Tab name="本月">
              list 1
            </Tab>
            <Tab name="上月">
              list 2
            </Tab>
            <Tab name="今年">
              list 3
            </Tab>
            <Tab name="自定义时间">
              list 4
            </Tab>
          </Tabs>
        ),
      }
    }</MainLayout>
  },
})
