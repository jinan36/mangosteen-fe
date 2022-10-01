import { defineComponent } from "vue";
import { Button } from "../shared/Button";

export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return () => (
      <div>
        <div p-16px>
          <Button w-full onClick={onClick}>
            测试
          </Button>
        </div>
      </div>
    );
  },
});
