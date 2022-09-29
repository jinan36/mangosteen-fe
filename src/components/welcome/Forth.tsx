import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import cloud from "../../assets/icons/cloud.svg";

export const Forth = defineComponent({
  setup() {
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
          <img src={cloud} />
          <h2 mt40px>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
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
          <RouterLink invisible to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/start">完成</RouterLink>
          <RouterLink invisible to="/start">
            跳过
          </RouterLink>
        </div>
      </div>
    );
  },
});
