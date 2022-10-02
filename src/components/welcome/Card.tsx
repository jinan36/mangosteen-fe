import { defineComponent } from "vue";

export const Card = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div
        flex="~ grow col"
        bg="$welcome-card-bg"
        rd="8px"
        p="16px"
        justify="center"
        items="center"
        text="center"
      >
        {slots.default?.()}
      </div>
    );
  },
});
