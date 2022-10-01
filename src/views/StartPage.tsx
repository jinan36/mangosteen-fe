import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";

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
        <FloatButton iconName="add" />
      </div>
    );
  },
});
