import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '../../shared/Button'
import { Icon } from '../../shared/Icon'
import { TagForm } from './TagForm'

export const TagEdit = defineComponent({
  setup() {
    const router = useRouter()

    return () => (
      <MainLayout>
        {{
          title: () => '编辑标签',
          icon: () => <Icon name="left" onClick={() => router.back()} />,
          default: () => (
            <>
              <TagForm buttonText="保存" />
              <div p="t0 b16px x16px" flex="~" justify="between">
                <Button level="danger" w="[calc(50%-8px)]">删除标签</Button>
                <Button level="danger" w="[calc(50%-8px)]">删除标签和记账</Button>
              </div>
            </>

          ),
        }}
      </MainLayout>
    )
  },
})
