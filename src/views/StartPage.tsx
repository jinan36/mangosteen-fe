import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { Overlay } from '../shared/overlay/Overlay'
import classes from './StartPage.module.styl'

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
              <Center class={classes.pigWrapper}>
                <Icon name="pig" class={classes.pig}/>
              </Center>
              <div class={classes.buttonWrapper}>
                <RouterLink to="/items/create">
                  <Button class={classes.button}>开始记账</Button>
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
