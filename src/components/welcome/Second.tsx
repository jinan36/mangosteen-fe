import { RouterLink } from "vue-router";
import clock from "../../assets/icons/clock.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={clock} />,
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
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);
