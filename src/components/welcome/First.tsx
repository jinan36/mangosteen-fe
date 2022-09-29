import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import pig from "../../assets/icons/pig.svg";

export const First = defineComponent({
  setup() {
    return () => (
      <div flex="~ col grow">
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
          <img src={pig} />
          <h2 mt40px>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </div>
        <div
          flex
          justify-between
          items-center
          mx16px
          text-32px
          py24px
          c="$welcome-text"
        >
          <RouterLink invisible to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
