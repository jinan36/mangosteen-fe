import { defineComponent } from "vue";
import { Icon } from "../../shared/Icon";
import { time } from "../../shared/time";
import { Popup, DatetimePicker } from "vant";

export const InputPad = defineComponent({
  setup() {
    const _now = new Date();
    let now = $ref(_now);
    let tempDate = $ref(_now);
    let popVisible = $ref(false);
    const showDatePicker = () => {
      tempDate = now;
      popVisible = true;
    };
    const hideDatePicker = () => {
      popVisible = false;
    };
    const setDate = () => {
      now = tempDate;
      hideDatePicker();
    };

    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      {
        text: () => <Icon w="24px" h="24px" fill="#333" name="backspace" />,
        onClick: () => {},
      },
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
            <Icon
              w="20px"
              h="20px"
              mr="4px"
              fill="$input-pad-date-text"
              name="brush"
            />
            <span c="#999/500">备注</span>
          </span>
          <span text="20px" c="$input-pad-amount-text">
            199.12
          </span>
        </div>
        <div flex="~ between-center" p="x16px b16px t4px" font="mono">
          <span
            text="12px"
            flex="~ center-center"
            c="$input-pad-date-text"
            border="~ color-$input-pad-button-border-color rd-18px"
            p="y6px l10px r12px"
            bg="$input-pad-button-border-color"
          >
            <Icon
              w="20px"
              h="20px"
              mr="8px"
              fill="$input-pad-date-text"
              name="date"
            />
            <span>
              <span onClick={showDatePicker}>{time(now).format()}</span>
              <Popup position="bottom" v-model:show={popVisible}>
                <DatetimePicker
                  v-model={tempDate}
                  type="date"
                  title="请选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
        </div>
        <div
          grid="~ cols-4"
          auto="rows-48px cols-fr"
          gap="1px"
          border="t-1 $input-pad-button-border-color"
          bg="$input-pad-button-border-color"
        >
          {buttons.map((button, index) => {
            const cls =
              index === 15
                ? "bg-$input-pad-button-bg-important! c-$input-pad-button-text-important!"
                : "";
            return (
              <button
                class={cls}
                border="none"
                bg="$input-pad-button-bg"
                flex="~ center-center"
                onClick={button.onClick}
              >
                {typeof button.text === "function"
                  ? button.text()
                  : button.text}
              </button>
            );
          })}
        </div>
      </>
    );
  },
});
