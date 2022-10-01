import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";

export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return () => (
      <div>
        <nav>menu</nav>
        <Center py160px>
          <Icon name="pig" w-128px h-128px />
        </Center>
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
