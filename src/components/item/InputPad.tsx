import { defineComponent } from "vue";
import { Icon } from "../../shared/Icon";

export const InputPad = defineComponent({
  setup(props, context) {
    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "删除", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: "再记", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "保存", onClick: () => {} },
    ];
    return () => (
      <>
        <div>
          <span>
            <Icon name="date" />
            <span>2022-01-01</span>
          </span>
          <span>数字</span>
        </div>
        <div flex="~ wrap" border="t-1 $input-pad-button-border-color">
          {buttons.map((button, index) => {
            const borderClass = `0 $input-pad-button-border-color${
              (index + 1) % 4 === 0 ? " r-0" : " r-1"
            }${index > 11 ? " b-0" : " b-1"}`;
            return (
              <button
                border={borderClass}
                w="1/4"
                h="48px"
                bg="transparent"
                onClick={button.onClick}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </>
    );
  },
});
