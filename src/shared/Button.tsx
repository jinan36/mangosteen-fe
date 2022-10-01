import { defineComponent } from "vue";

export const Button = defineComponent({
  setup(_, { slots }) {
    return () => (
      <button class="border border-$button-bg rd-$button-radius py8px px16px bg-$button-bg text-$button-text text-size-$button-font-size h-$button-height">
        {slots.default?.()}
      </button>
    );
  },
});
