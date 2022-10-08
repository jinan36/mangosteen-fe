import { defineComponent, reactive } from 'vue'
import type { Rules } from '../../hooks/useValidate'
import { useValidate } from '../../hooks/useValidate'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '../../shared/Button'
import { Icon } from '../../shared/Icon'
import { EmojiSelector } from './EmojiSelector'

export const TagCreate = defineComponent({
  setup() {
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
    const onSumit = (e: Event) => {
      e.preventDefault()
      validate()
    }

    const borderColorClass = (errors?: string[]) => {
      return (errors && errors.length) ? 'children:border-$error-color' : 'children:border-$input-border-color'
    }
    return () => (
      <MainLayout>
        {{
          title: () => '新建标签',
          icon: () => <Icon name="left" onClick={() => { }} />,
          default: () => (
            <form p="16px">
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
                  <Button min-h="$input-min-height" max-w="full" w="full" onClick={onSumit}>
                    确定
                  </Button>
                </div>
              </div>
            </form>
          ),
        }}
      </MainLayout>
    )
  },
})
