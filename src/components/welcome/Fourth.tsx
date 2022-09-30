import { defineComponent } from "vue";
import cloud from "../../assets/icons/cloud.svg";
import { Card } from "./Card";

export const Fourth = defineComponent({
  setup() {
    return () => (
      <Card>
        <img src={cloud} />
        <h2 mt40px>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      </Card>
    );
  },
});
