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
          p-16px
          m="x-16px t-16px"
          justify-center
          items-center
          text-center
        >
          <img src={pig} />
          <h2 mt-40px>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </div>
        <div
          flex
          justify-between
          items-center
          mx-16px
          text-32px
          py-24px
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
