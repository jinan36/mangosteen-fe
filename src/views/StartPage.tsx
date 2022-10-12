import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { OverlayIcon } from '../shared/Overlay'

export const StartPage = defineComponent({
  setup() {
    return () => (
      <MainLayout>
        {{
          title: () => '山竹记账',
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Center p-y-120px>
                <Icon name="pig" w="128px" h="128px" />
              </Center>
              <div p="16px">
                <RouterLink to="/items/create">
                  <Button w="full">开始记账</Button>
                </RouterLink>
              </div>
              <RouterLink to="/items/create">
                <FloatButton iconName="add" />
              </RouterLink>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
