import { defineComponent, reactive } from 'vue'
import type { Rules } from '../../hooks/useValidate'
import { useValidate } from '../../hooks/useValidate'
import { Button } from '../../shared/Button'
import { Form, FormItem } from '../../shared/Form'

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

    return () => (
      <Form onSubmit={onSubmit}>
        <FormItem label="标签名" type="text" v-model={formData.name} error={errors.value.name && errors.value.name[0]} />
        <FormItem label={`符号 ${formData.sign}`} type='emojiSelect' v-model={formData.sign} error={errors.value.sign && errors.value.sign[0]} />
        <FormItem>
          <p text="center" p="y16px">
            记账时长按标签即可进行编辑
          </p>
        </FormItem>
        <FormItem>
          <Button min-h="$input-min-height" >
            {props.buttonText}
          </Button>
        </FormItem>
      </Form>
    )
  },
})
