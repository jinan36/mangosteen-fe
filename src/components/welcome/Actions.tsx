import { defineComponent } from "vue";

export const Actions = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div
        fixed
        z="$z-index-bottom-nav"
        bg="$welcome-bg-end"
        left-0
        bottom-0
        w-full
        flex
        justify-between
        items-center
        text-24px
        h="$welcome-nav-height"
        px16px
        c="$welcome-text"
        pb="$welcome-nav-gap"
      >
        {slots.default?.()}
      </div>
    );
  },
});
