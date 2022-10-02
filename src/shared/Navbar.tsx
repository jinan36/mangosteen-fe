import { defineComponent } from "vue";

export const Navbar = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div
        bg="gradient-to-b"
        from="$navbar-bg-start"
        to="$navbar-bg-end"
        text="$navbar-text"
        fill="$navbar-text"
        flex="~"
        justify="start"
        items="center"
        p="x16px t40px b12px"
      >
        <span
          w="36px"
          h="36px"
          flex="~"
          justify="center"
          items="center"
          max-w="children:full"
          max-h="children:full"
        >
          {slots.icon?.()}
        </span>
        <span text="24px" ml="12px">
          {slots.default?.()}
        </span>
      </div>
    );
  },
});
