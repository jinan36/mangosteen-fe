import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import { Actions } from "./Actions";

export const FirstActions = defineComponent({
  setup() {
    return () => (
      <Actions>
        <RouterLink class="invisible" to="/start">
          跳过
        </RouterLink>
        <RouterLink to="/welcome/2">下一页</RouterLink>
        <RouterLink to="/start" replace>
          跳过
        </RouterLink>
      </Actions>
    );
  },
});
