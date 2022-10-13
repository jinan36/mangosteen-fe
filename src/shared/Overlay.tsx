import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import type { IconNames } from './Icon'
import { Icon } from './Icon'

export const OverlayAction = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconNames>,
      required: true,
    },
    to: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () => (
      <RouterLink flex="~ start-center" p="y12px x16px" to={props.to}>
        <Icon name={props.iconName} />
        <span>{slots.default?.()}</span>
      </RouterLink>
    )
  },
})

export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
    },
  },
  setup(props) {
    const router = useRouter()

    const onClose = () => {
      props.onClose?.()
    }
    const onClickSignIn = () => {
      router.push('/sign_in')
    }
    return () => (
      <>
        <div
          pos="fixed"
          left="0"
          top="$top-safe-area-height"
          z="$z-index-overlay"
          bg="$overlay-mask-bg"
          w="full"
          h="[calc(100%-var(--top-safe-area-height))]"
          onClick={onClose}
        ></div>
        <div
          pos="fixed"
          z="[calc(var(--z-index-overlay)+1)]"
          bg="$overlay-bg"
          top="$top-safe-area-height"
          left="0"
          w="16em"
          h="[calc(100%-var(--top-safe-area-height))]"
        >
          <section
            p="y32px x16px"
            bg="$overlay-user-bg"
            c="$overlay-user-text"
            onClick={onClickSignIn}
          >
            <h2>未登录用户</h2>
            <p>点击这里登录</p>
          </section>
          <nav>
            <ul p="t16px" text="size-20px" m="svg:r12px" c="$text">
              <li>
                {/* to="/statistics" */}
                <OverlayAction to="/statistics" iconName="charts">
                  统计图表
                </OverlayAction>
              </li>
              <li>
                {/* to="/export" */}
                <OverlayAction to="#" iconName="export">
                  导出数据
                </OverlayAction>
              </li>
              <li>
                {/* to="/notify" */}
                <OverlayAction to="#" iconName="notify">
                  记账提醒
                </OverlayAction>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  },
})

export const OverlayIcon = defineComponent({
  setup() {
    let overlayVisible = $ref(false)
    const onClickMenu = () => {
      overlayVisible = !overlayVisible
    }
    return () => <>
      <Icon
        w="30px"
        h="30px"
        relative="~"
        top="2px"
        name="menu"
        onClick={onClickMenu}
      ></Icon>
      {overlayVisible && (
        <Overlay onClose={() => (overlayVisible = false)}></Overlay>
      )}
    </>
  },
})
