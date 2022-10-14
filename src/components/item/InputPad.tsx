import { defineComponent } from 'vue'
import { $ref } from 'vue/macros'
import { Icon } from '../../shared/Icon'
import { Time } from '../../shared/time'
import { useInputPad } from '../../hooks/useInputPad'

const NoteAndAmount = defineComponent({
  name: 'NoteAndAmount',
  setup(props, { slots }) {
    return () => <div flex="~ between-center" p="16px"
      font="mono"
      bg="$overlay-bg">{slots.default?.()}</div>
  },
})

const Actions = defineComponent({
  name: 'Actions',
  setup(props, { slots }) {
    return () => <div flex="~ between-center" p="x16px b16px t4px" font="mono" bg="$overlay-bg">{slots.default?.()}</div>
  },
})

const ButtonsWrapper = defineComponent({
  name: 'ButtonsWrapper',
  setup(props, { slots }) {
    return () => <div grid="~ cols-4"
      auto="rows-48px cols-fr"
      gap="1px"
      border="t-1 $input-pad-button-border-color"
      bg="$input-pad-button-border-color">{slots.default?.()}</div>
  },
})

export const InputPad = defineComponent({
  name: 'InputPad',
  setup() {
    const _now = new Date()
    let now = $ref(_now)
    let tempDate = $ref(_now)
    let popVisible = $ref(false)
    const showDatePicker = () => {
      tempDate = now
      popVisible = true
    }
    const hideDatePicker = () => {
      popVisible = false
    }
    const setDate = () => {
      now = tempDate
      hideDatePicker()
    }

    const { amount, appendText, backspace } = useInputPad()
    const buttons = [
      {
        text: '1',
        onClick: () => {
          appendText(1)
        },
      },
      {
        text: '2',
        onClick: () => {
          appendText(2)
        },
      },
      {
        text: '3',
        onClick: () => {
          appendText(3)
        },
      },
      {
        text: () => <Icon w="24px" h="24px" fill="#333" name="backspace" />,
        onClick: () => {
          backspace()
        },
      },
      {
        text: '4',
        onClick: () => {
          appendText(4)
        },
      },
      {
        text: '5',
        onClick: () => {
          appendText(5)
        },
      },
      {
        text: '6',
        onClick: () => {
          appendText(6)
        },
      },
      {
        text: '+',
        onClick: () => {
          appendText('+')
        },
      },
      {
        text: '7',
        onClick: () => {
          appendText(7)
        },
      },
      {
        text: '8',
        onClick: () => {
          appendText(8)
        },
      },
      {
        text: '9',
        onClick: () => {
          appendText(9)
        },
      },
      {
        text: '-',
        onClick: () => {
          appendText('-')
        },
      },
      { text: '再记', onClick: () => { } },
      {
        text: '0',
        onClick: () => {
          appendText(0)
        },
      },
      {
        text: '.',
        onClick: () => {
          appendText('.')
        },
      },
      { text: '保存', onClick: () => { } },
    ]
    return () => (
      <div border="t-1 t-$input-pad-button-border-color">
        <NoteAndAmount>
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
            {amount.value}
          </span>
        </NoteAndAmount>
        <Actions>
          <div
            text="12px"
            flex="~ center-center"
            c="$input-pad-date-text"
            border="~ color-$input-pad-date-text rd-18px"
            p="y6px l10px r12px"
            bg="$input-pad-date-bg"
          >
            <Icon
              w="20px"
              h="20px"
              mr="8px"
              fill="$input-pad-date-text"
              name="date"
            />
            <span>
              <span onClick={showDatePicker}>{new Time(now).format()}</span>
              <van-popup position="bottom" v-model:show={popVisible}>
                <van-datetime-picker
                  v-model={tempDate}
                  type="date"
                  title="请选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </van-popup>
            </span>
          </div>
        </Actions>
        <ButtonsWrapper>
          {buttons.map((button, index) => {
            const cls
              = index === 15
                ? 'bg-$input-pad-button-bg-important! c-$input-pad-button-text-important!'
                : ''
            return (
              <button
                class={cls}
                border="none"
                bg="$input-pad-button-bg"
                flex="~ center-center"
                onClick={button.onClick}
              >
                {typeof button.text === 'function'
                  ? button.text()
                  : button.text}
              </button>
            )
          })}
        </ButtonsWrapper>
      </div>
    )
  },
})

