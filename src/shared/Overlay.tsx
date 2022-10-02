import { defineComponent, PropType } from "vue";
import { Icon } from "./Icon";

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
          <section>
            <h2>未登录用户</h2>
            <p>点击这里登录</p>
          </section>
          <nav>
            <ul>
              <li>
                <Icon name="charts" />
                <span>统计图表</span>
              </li>
              <li>
                <Icon name="export" />
                <span>导出数据</span>
              </li>
              <li>
                <Icon name="notify" />
                <span>记账提醒</span>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});
