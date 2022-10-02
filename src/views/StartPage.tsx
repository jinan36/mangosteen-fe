import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import { Overlay } from "../shared/Overlay";

export const StartPage = defineComponent({
  setup() {
    let overlayVisible = $ref(false);
    const onClickMenu = () => {
      overlayVisible = !overlayVisible;
    };
    return () => (
      <div>
        <Navbar>
          {{
            default: () => "山竹记账",
            icon: () => (
              <Icon
                w="30px"
                h="30px"
                relative="~"
                top="2px"
                name="menu"
                onClick={onClickMenu}
              ></Icon>
            ),
          }}
        </Navbar>
        <Center p="y120px">
          <Icon name="pig" w="128px" h="128px" />
        </Center>
        <div p="16px">
          <Button w="full">开始记账</Button>
        </div>
        <FloatButton iconName="add" />
        {overlayVisible && (
          <Overlay onClose={() => (overlayVisible = false)}></Overlay>
        )}
      </div>
    );
  },
});
