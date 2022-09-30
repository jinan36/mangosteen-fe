import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import cloud from "../../assets/icons/cloud.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Forth = defineComponent({
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={cloud} />,
          title: () => (
            <h2 mt40px>
              每日提醒
              <br />
              不遗漏每一笔账单
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink invisible to="/start">
                跳过
              </RouterLink>
              <RouterLink to="/welcome/4">完成</RouterLink>
              <RouterLink invisible to="/start">
                跳过
              </RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
