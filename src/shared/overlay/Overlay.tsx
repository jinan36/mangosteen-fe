import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { OverlayAction } from './OverlayAction'
import classes from './Overlay.module.styl'

export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
    },
  },
  setup(props) {
    const onClose = () => {
      props.onClose?.()
    }
    const onClickSignIn = () => {
    }
    return () => (
      <>
        <div
          class={classes.mask}
          onClick={onClose}
        ></div>
        <div
          class={classes.overlay}
        >
          <section
            class={classes.currentUser}
            onClick={onClickSignIn}
          >
            <h2>未登录用户</h2>
            <p>点击这里登录</p>
          </section>
          <nav>
            <ul class={classes.actionList}>
              <li>
                {/* to="/statistics" */}
                <OverlayAction to="#" iconName="charts">
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
