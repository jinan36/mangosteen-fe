import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { $computed, $ref } from 'vue/macros'
import { EmojiSelector } from '../components/tag/EmojiSelector'
import { Button } from './Button'
import { Time } from './time'

export const Form = defineComponent({
  name: 'BasicForm',
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup(props, { slots }) {
    const handleSubmit = (e: Event) => {
      e.preventDefault()
      props.onSubmit?.(e)
    }
    return () => <form p="16px" onSubmit={handleSubmit}>{slots.default?.()}</form>
  },
})

const DatePicker = defineComponent({
  name: 'DatePicker',
  props: {
    modelValue: { type: Time, required: true },
  },
  setup(props, { emit }) {
    let datePickerVisible = $ref(false)
    let tempDate = $ref(props.modelValue.getStrArr())

    return () => (<>
      <input
        min-h="$input-min-height"
        border="1 rd-$input-radius"
        text="18px"
        p="x16px"
        shadow="formInputInner"
        readonly={true}
        value={props.modelValue.format()}
        onClick={() => {
          tempDate = props.modelValue.getStrArr()
          datePickerVisible = true
        }}
      />
      <van-popup position="bottom" v-model:show={datePickerVisible} teleport="body">
        <van-date-picker
          v-model={tempDate}
          title="请选择年月日"
          onConfirm={({ selectedValues }: { selectedValues: string[] }) => {
            const date = new Date(`${selectedValues[0]}-${selectedValues[1]}-${selectedValues[2]}T00:00:00`)
            emit('update:modelValue', new Time(date))
            datePickerVisible = false
          }}
          onCancel={() => {
            datePickerVisible = false
          }}
        />
      </van-popup>
    </>)
  },
})

export const FormItem = defineComponent({
  name: 'FormItem',
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number, Object] as PropType<string | number | Time>,
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'validationCode' | 'date' | 'select'>,
    },
    error: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    options: {
      type: Array as PropType<{ value: string | number; label: string }[]>,
    },
    onClick: {
      type: Function as PropType<() => void>,
    },
    countFrom: {
      type: Number,
      default: 60,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, expose }) {
    const blockClass = $computed(() => {
      return props.error ? 'border-color-$error-color!' : 'border-color-$input-border-color'
    })

    let timer = $ref<ReturnType<typeof setInterval>>()
    let count = $ref(props.countFrom)
    const isCounting = $computed(() => !!timer)
    const startCountdown = () => {
      if (timer)
        return
      timer = setInterval(() => {
        count -= 1
        if (count === 0) {
          clearInterval(timer)
          timer = undefined
          count = props.countFrom
        }
      }, 1000)
    }
    expose({ startCountdown })

    const content = $computed(() => {
      switch (props.type) {
        case 'text': {
          return (
            <input
              min-h="$input-min-height"
              border="1 rd-$input-radius"
              text="18px"
              p="x16px"
              shadow="formInputInner"
              class={blockClass}
              value={props.modelValue}
              onInput={(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)}
              placeholder={props.placeholder}
            ></input>
          )
        }
        case 'emojiSelect': {
          return (
            <EmojiSelector
              class={blockClass}
              modelValue={(props.modelValue as string)}
              onUpdate:modelValue={(value: string) => emit('update:modelValue', value)}
              min-h="$input-min-height" />
          )
        }
        case 'validationCode': {
          return (
            <div flex="~">
              <input
                w="9em"
                min-h="$input-min-height"
                border="1 rd-$input-radius"
                text="18px"
                p="x16px"
                shadow="formInputInner"
                class={blockClass}
                value={props.modelValue}
                onInput={(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)}
                placeholder={props.placeholder}
              ></input>
              <Button m="l16px" flex="grow" onClick={props.onClick} disabled={isCounting}>{
                isCounting ? `${count}s` : '发送验证码'
              }</Button>
            </div>
          )
        }
        case 'date': {
          return <DatePicker
            modelValue={(props.modelValue as Time)}
            onUpdate:modelValue={(value: Time) => emit('update:modelValue', value)}
          />
        }
        case 'select': {
          return <select
            min-h="$input-min-height"
            border="1 rd-$input-radius"
            p="x8px"
            class={blockClass}
            value={props.modelValue}
            onChange={(e: Event) => { emit('update:modelValue', (e.target as HTMLSelectElement).value) }}>
            {props.options?.map(option => <option value={option.value}>{option.label}</option>)}
          </select >
        }
        default: {
          return slots.default?.()
        }
      }
    })

    return () => (
      <div mt="8px">
        <label>
          <span>{props.label}</span>
          <div flex="~ col" mt="4px">
            {content}
          </div>
          <div mt="4px" c="$error-color" text="12px" min-h="16px">
            <span>{props.error}</span>
          </div>
        </label>
      </div>
    )
  },
})
