import { defineComponent, PropType } from "vue";

const directionMap = {
  "-": "horizontal",
  horizontal: "horizontal",
  "|": "vertical",
  vertical: "vertical",
};

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<"-" | "|" | "horizontal" | "vertical">,
      default: "horizontal",
    },
  },
  setup(props, context) {
    const isHorizontal = $computed(
      () => directionMap[props.direction] === "horizontal"
    );
    return () => (
      <div
        flex={["~", isHorizontal ? "row" : "col"].join(" ")}
        justify="center"
        items="center"
      >
        {context.slots.default?.()}
      </div>
    );
  },
});
