import { defineComponent } from "vue";
export const WelcomeLayout = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div flex="~ col grow" pb="$welcome-nav-gap">
        <div
          flex="~ grow col"
          bg="$welcome-card-bg"
          rd-8px
          p16px
          m="x16px t16px"
          justify-center
          items-center
          text-center
        >
          {slots.icon?.()}
          {slots.title?.()}
        </div>
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
          {slots.buttons?.()}
        </div>
      </div>
    );
  },
});
