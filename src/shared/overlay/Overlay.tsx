import { defineComponent, PropType } from "vue";
import { OverlayAction } from "./OverlayAction";

export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
    },
  },
  setup(props, context) {
    const onClose = () => {
      props.onClose?.();
    };
    const onClickSignIn = () => {
      console.log("sign in");
    };
    return () => (
      <>
        <div
          fixed="~"
          top="$top-safe-area-height"
          left="0"
          z="$z-index-overlay"
          bg="$overlay-mask-bg"
          w="full"
          h="[calc(100%-var(--top-safe-area-height))]"
          onClick={onClose}
        ></div>
        <div
          fixed="~"
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
            text="$overlay-user-text"
            onClick={onClickSignIn}
          >
            <h2>未登录用户</h2>
            <p>点击这里登录</p>
          </section>
          <nav>
            <ul p="t16px" text="20px" m="svg:r12px">
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
    );
  },
});