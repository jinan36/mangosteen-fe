import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";

export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return () => (
      <div>
        <Navbar>
          {{
            default: () => "山竹记账",
            icon: () => (
              <Icon w="30px" h="30px" relative="~" top="2px" name="menu"></Icon>
            ),
          }}
        </Navbar>
        <Center p="y120px">
          <Icon name="pig" w="128px" h="128px" />
        </Center>
        <div p="16px">
          <Button w="full" onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton iconName="add" />
      </div>
    );
  },
});
