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
    const extraClass = $computed(() => directionMap[props.direction]);
    return () => (
      <div
        class={[
          "flex",
          " justify-center",
          " items-center",
          extraClass === "horizontal" ? "row" : "col",
        ]}
      >
        {context.slots.default?.()}
      </div>
    );
  },
});
