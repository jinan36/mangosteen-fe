import type { VNode } from 'vue'
import { Transition, defineComponent, ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import {
  RouterView,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from 'vue-router'
import { useSwipe } from '@vueuse/core'
import s from './Welcome.module.styl'

const forwardMap: Record<string, string> = {
  Welcome1: '/welcome/2',
  Welcome2: '/welcome/3',
  Welcome3: '/welcome/4',
}
const backMap: Record<string, string> = {
  Welcome2: '/welcome/1',
  Welcome3: '/welcome/2',
  Welcome4: '/welcome/3',
}

export const Welcome = defineComponent({
  setup() {
    let enterFromClass = $ref(s.slide_fade_forward_enter_from)
    let leaveToClass = $ref(s.slide_fade_forward_leave_to)
    onBeforeRouteUpdate((to, from) => {
      const fromIndexS = from.path.match(/welcome\/(\d*)/)?.[1] ?? ''
      const toIndexS = to.path.match(/welcome\/(\d*)/)?.[1] ?? ''

      if (fromIndexS && toIndexS) {
        const isForward
          = Number.parseInt(toIndexS, 10) > Number.parseInt(fromIndexS, 10)
        enterFromClass = isForward
          ? s.slide_fade_forward_enter_from
          : s.slide_fade_back_enter_from
        leaveToClass = isForward
          ? s.slide_fade_forward_leave_to
          : s.slide_fade_back_leave_to
      }
    })

    const main = ref(null)
    const route = useRoute()
    const router = useRouter()
    useSwipe(main, {
      passive: false,
      onSwipeEnd(_, direction) {
        if (direction === 'LEFT') {
          const name = (route.name || 'Welcome3').toString()
          router.replace(forwardMap[name])
        }
        else {
          const name = (route.name || 'Welcome2').toString()
          router.replace(backMap[name])
        }
      },
    })

    return () => (
      <div class={s.wrapper} >
        <header>
          <svg>
            <use xlinkHref="#mangosteen"></use>
          </svg>
          <h1>山竹记账</h1>
        </header>
        <main>
          <RouterView name="main">
            {({
              Component: X,
            }: {
              Component: VNode
              route: RouteLocationNormalizedLoaded
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
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    )
  },
})
