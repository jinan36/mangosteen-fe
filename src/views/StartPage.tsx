import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { Overlay } from '../shared/overlay/Overlay'

export const StartPage = defineComponent({
  setup() {
    let overlayVisible = $ref(false)
    const onClickMenu = () => {
      overlayVisible = !overlayVisible
    }
    return () => (
      <MainLayout>
        {{
          title: () => '山竹记账',
          icon: () => (
            <Icon
              w="30px"
              h="30px"
              relative="~"
              top="2px"
              name="menu"
              onClick={onClickMenu}
            ></Icon>
          ),
          default: () => (
            <>
              <Center p="y120px">
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
              {overlayVisible && (
                <Overlay onClose={() => (overlayVisible = false)}></Overlay>
              )}
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
