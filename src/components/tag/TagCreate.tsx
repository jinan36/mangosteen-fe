import { defineComponent, reactive } from 'vue'
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
                  <div flex="~" mt="4px">
                    <input
                      min-h="$input-min-height"
                      max-w="full"
                      flex="grow"
                      border="1 $input-border-color rd-$input-radius"
                      text="18px"
                      p="x16px"
                      shadow="formInputInner"
                      class="border-$error-color"
                      v-model={formData.name}
                    ></input>
                  </div>
                  <div mt="4px" c="$error-color" text="12px">
                    <span>必填</span>
                  </div>
                </label>
              </div>
              <div mt="8px">
                <label>
                  <span>符号 {formData.sign}</span>
                  <div flex="~" mt="4px">
                    <EmojiSelector v-model={formData.sign} min-h="$input-min-height"
                      max-w="full" />
                  </div>
                  <div mt="4px" c="$error-color" text="12px">
                    <span>必填</span>
                  </div>
                </label>
              </div>
              <p text="center" p="y16px">
                记账时长按标签即可进行编辑
              </p>
              <div mt="8px">
                <div flex="~" mt="4px">
                  <Button min-h="$input-min-height" max-w="full" w="full">
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
