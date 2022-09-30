import { defineComponent } from "vue";
import { Card } from "./Card";

export const Third = defineComponent({
  setup() {
    return () => (
      <Card>
        <svg>
          <use xlinkHref="#chart"></use>
        </svg>
        <h2 mt40px>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      </Card>
    );
  },
});
