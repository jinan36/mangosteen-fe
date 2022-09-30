import { defineComponent, Transition, VNode } from "vue";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalizedLoaded,
  RouterView,
} from "vue-router";
import logo from "../assets/icons/mangosteen.svg";
import s from "./Welcome.module.scss";

export const Welcome = defineComponent({
  setup() {
    let enterFromClass = $ref(s.slide_fade_forward_enter_from);
    let leaveToClass = $ref(s.slide_fade_forward_leave_to);
    onBeforeRouteUpdate((to, from) => {
      const fromIndexS = from.path.match(/welcome\/(\d*)/)?.[1] ?? "";
      const toIndexS = to.path.match(/welcome\/(\d*)/)?.[1] ?? "";

      if (fromIndexS && toIndexS) {
        const isForward =
          Number.parseInt(toIndexS, 10) > Number.parseInt(fromIndexS, 10);
        enterFromClass = isForward
          ? s.slide_fade_forward_enter_from
          : s.slide_fade_back_enter_from;
        leaveToClass = isForward
          ? s.slide_fade_forward_leave_to
          : s.slide_fade_back_leave_to;
      }
    });

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
          <svg w-64px h-69px>
            <use xlinkHref="#mangosteen"></use>
          </svg>
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
                enterFromClass={enterFromClass}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={leaveToClass}
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
