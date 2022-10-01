import { defineComponent, PropType } from "vue";

export type IconNames =
  | "add"
  | "chart"
  | "clock"
  | "cloud"
  | "mangosteen"
  | "pig";

export const Icon = defineComponent({
  props: {
    name: { type: String as PropType<IconNames>, required: true },
  },
  setup(props) {
    return () => (
      <svg class="w-1.2em h-1.2em">
        <use xlinkHref={"#" + props.name} />
      </svg>
    );
  },
});
