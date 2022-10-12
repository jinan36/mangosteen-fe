import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { EmojiSelector } from '../components/tag/EmojiSelector'

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup(props, { slots }) {
    return () => <form p="16px" onSubmit={props.onSubmit}>{slots.default?.()}</form>
  },
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'date'>,
    },
    error: {
      type: String,
    },
  },
  setup(props, { slots, emit }) {
    const blockClass = $computed(() => {
      return props.error ? 'children:border-$error-color' : 'children:border-$input-border-color'
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
              value={props.modelValue}
              onInput={(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)}
            ></input>
          )
        }
        case 'emojiSelect': {
          return (
            <EmojiSelector
              value={props.modelValue}
              {...{
                'onUpdate:modelValue': (value: string) => emit('update:modelValue', value),
              }}
              min-h="$input-min-height" />
          )
        }
        case 'date': {
          return <input />
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
