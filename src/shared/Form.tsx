import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { EmojiSelector } from '../components/tag/EmojiSelector'
import { Button } from './Button'
import { Time } from './time'

export const Form = defineComponent({
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
  props: {
    modelValue: { type: Time, required: true },
  },
  setup(props, { emit }) {
    let datePickerVisible = $ref(false)
    let tempDate = $ref(props.modelValue.getRaw())

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
          tempDate = props.modelValue.getRaw()
          datePickerVisible = true
        }}
      />
      <van-popup position="bottom" v-model:show={datePickerVisible} teleport="body">
        <van-datetime-picker
          v-model={tempDate}
          type="date"
          title="请选择年月日"
          onConfirm={(date: Date) => {
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
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number, Object] as PropType<string | number | Time>,
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'validationCode' | 'date'>,
    },
    error: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const blockClass = $computed(() => {
      return props.error ? 'border-$error-color' : 'border-$input-border-color'
    })

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
              <Button attrType="button" m="l16px" flex="grow">发送验证码</Button>
            </div>
          )
        }
        case 'date': {
          return <DatePicker
            modelValue={(props.modelValue as Time)}
            onUpdate:modelValue={(value: Time) => emit('update:modelValue', value)}
          />
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
          <div flex="~ col" mt="4px" class={blockClass}>
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
