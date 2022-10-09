import { defineComponent, reactive } from 'vue'
import type { Rules } from '../../hooks/useValidate'
import { useValidate } from '../../hooks/useValidate'
import { Button } from '../../shared/Button'
import { EmojiSelector } from './EmojiSelector'

export const TagForm = defineComponent({
  props: {
    buttonText: {
      type: String,
      default: '确定',
    },
  },
  setup(props) {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const rules: Rules<typeof formData> = [
      { key: 'name', type: 'required', message: '必填' },
      { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
      { key: 'sign', type: 'required', message: '必填' },
    ]
    const { errors, validate } = useValidate<typeof formData>(formData, rules)
    const onSubmit = (e: Event) => {
      validate()
      e.preventDefault()
    }

    const borderColorClass = (errors?: string[]) => {
      return (errors && errors.length) ? 'children:border-$error-color' : 'children:border-$input-border-color'
    }
    return () => (
      <form p="16px" onSubmit={onSubmit}>
        <div mt="8px">
          <label>
            <span>标签名</span>
            <div flex="~" mt="4px" class={[borderColorClass(errors.value.name)]}>
              <input
                min-h="$input-min-height"
                max-w="full"
                flex="grow"
                border="1 rd-$input-radius"
                text="18px"
                p="x16px"
                shadow="formInputInner"
                v-model={formData.name}
              ></input>
            </div>
            <div mt="4px" c="$error-color" text="12px" min-h="16px">
              <span>{errors.value.name && errors.value.name[0]}</span>
            </div>
          </label>
        </div>
        <div mt="8px">
          <label>
            <span>符号 {formData.sign}</span>
            <div flex="~" mt="4px" class={[borderColorClass(errors.value.sign)]}>
              <EmojiSelector v-model={formData.sign} min-h="$input-min-height"
                max-w="full" />
            </div>
            <div mt="4px" c="$error-color" text="12px" min-h="16px">
              <span>{errors.value.sign && errors.value.sign[0]}</span>
            </div>
          </label>
        </div>
        <p text="center" p="y16px">
          记账时长按标签即可进行编辑
        </p>
        <div mt="8px">
          <div flex="~" mt="4px">
            <Button min-h="$input-min-height" max-w="full" w="full">
              {props.buttonText}
            </Button>
          </div>
        </div>
      </form>
    )
  },
})
