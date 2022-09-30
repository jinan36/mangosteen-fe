import { defineComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import logo from "../assets/icons/mangosteen.svg";
import s from "./Welcome.module.scss";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div
        h="[calc(100vh-var(--welcome-nav-height))]"
        flex="~ col"
        bg-gradient-to-b
        from="$welcome-bg-start"
        to="$welcome-bg-end"
        mb="$welcome-nav-height"
      >
        <header
          flex="~ shrink-0 col"
          justify-center
          items-center
          pt66px
          c-hex-d4d4ee
        >
          <img src={logo} alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main flex="~ grow col" relative m="x16px t16px b$welcome-nav-gap">
          <RouterView name="main">
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer shrink-0>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
