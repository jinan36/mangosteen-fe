import { defineComponent } from "vue";
import clock from "../../assets/icons/clock.svg";
import { Card } from "./Card";

export const Second = defineComponent({
  setup() {
    return () => (
      <Card>
        <img src={clock} />
        <h2 mt40px>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      </Card>
    );
  },
});
