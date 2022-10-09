import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { TagForm } from './TagForm'

export const TagCreate = defineComponent({
  setup() {
    const router = useRouter()

    return () => (
      <MainLayout>
        {{
          title: () => '新建标签',
          icon: () => <Icon name="left" onClick={() => router.back()} />,
          default: () => (
            <TagForm />
          ),
        }}
      </MainLayout>
    )
  },
})
