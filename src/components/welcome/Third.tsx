import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import chart from "../../assets/icons/chart.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = defineComponent({
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={chart} />,
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
              <RouterLink to="/welcome/4">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
