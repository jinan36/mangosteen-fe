import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'

export const ItemCreate = defineComponent({
  setup() {
    const router = useRouter()
    const kind = $ref('支出')
    return () => (
      <MainLayout>
        {{
          title: () => '记一笔',
          icon: () => <Icon name="left" onClick={() => router.back()}></Icon>,
          default: () => (
            <>
              <Tabs v-model:selected={kind}>
                <Tab name="支出">支出内容</Tab>
                <Tab name="收入">收入内容</Tab>
              </Tabs>
              <div fixed="~" bottom="0" left="0" w="full">
                <InputPad />
              </div>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
