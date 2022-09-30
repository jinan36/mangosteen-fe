import { defineComponent, ref, Transition, VNode } from "vue";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalizedLoaded,
  RouterView,
  useRoute,
  useRouter,
} from "vue-router";
import s from "./Welcome.module.scss";
import { useSwipe } from "@vueuse/core";

const forwardMap: Record<string, string> = {
  Welcome1: "/welcome/2",
  Welcome2: "/welcome/3",
  Welcome3: "/welcome/4",
  Welcome4: "/start",
};
const backMap: Record<string, string> = {
  Welcome2: "/welcome/1",
  Welcome3: "/welcome/2",
  Welcome4: "/welcome/3",
};

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

    const main = ref(null);
    const route = useRoute();
    const router = useRouter();
    useSwipe(main, {
      passive: false,
      onSwipeEnd(_, direction) {
        if (direction === "LEFT") {
          const name = (route.name || "Welcome1").toString();
          router.replace(forwardMap[name]);
        } else {
          const name = (route.name || "Welcome2").toString();
          router.replace(backMap[name]);
        }
      },
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
        <main
          ref={main}
          flex="~ grow col"
          relative
          m="x16px t16px b$welcome-nav-gap"
        >
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
