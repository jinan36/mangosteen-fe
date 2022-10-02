import { defineComponent, PropType } from "vue";
import { RouterLink } from "vue-router";
import { Icon, IconNames } from "../Icon";

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
    );
  },
});
