import { defineComponent } from "vue";
import { Icon } from "../../shared/Icon";
import { time } from "../../shared/time";

export const InputPad = defineComponent({
  setup(props, context) {
    const now = new Date();
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
        <div
          flex="~ between-center"
          p="16px"
          font="mono"
          border="t-1 t-$input-pad-button-border-color"
        >
          <span text="12px" flex="~ center-center" c="$date-text">
            <Icon w="20px" h="20px" mr="8px" fill="" name="notes" />
            <span>备注</span>
          </span>
          <span text="20px" c="$amount-text">
            199.12
          </span>
        </div>
        <div flex="~ between-center" p="x16px b16px t4px" font="mono">
          <span
            text="12px"
            flex="~ center-center"
            c="$date-text"
            border="~ color-$input-pad-button-border-color rd-18px"
            p="y6px l10px r12px"
            bg="$input-pad-button-border-color"
          >
            <Icon w="20px" h="20px" mr="8px" fill="$date-text" name="date" />
            <span>{time(now).format()}</span>
          </span>
        </div>
        <div flex="~ wrap" border="t-1 $input-pad-button-border-color">
          {buttons.map((button, index) => {
            const cls = `border-0 border-color-$input-pad-button-border-color ${
              (index + 1) % 4 !== 0 ? "border-r" : ""
            } ${index <= 11 ? "border-b" : ""}`;

            return (
              <button
                class={cls}
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
