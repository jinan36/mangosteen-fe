import { defineComponent } from "vue";

export const Navbar = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="bg-gradient-to-b from-$navbar-bg-start to-$navbar-bg-end text-$navbar-text fill-$navbar-text flex justify-start items-center px16px pt40px pb12px">
        <span
          w36px
          h36px
          flex
          justify-center
          items-center
          children-max-w-full
          children-max-h-full
        >
          {slots.icon?.()}
        </span>
        <span text-24px ml-12px>
          {slots.default?.()}
        </span>
      </div>
    );
  },
});
