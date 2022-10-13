import { defineComponent, reactive } from 'vue'
import { useValidate } from '../hooks/useValidate'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Form, FormItem } from '../shared/Form'
import { Icon } from '../shared/Icon'

export const SignInPage = defineComponent({
  setup(props, context) {
    const formData = reactive({
      email: '',
      code: '',
    })

    const { validate, errors } = useValidate(formData, [
      { key: 'email', type: 'required', message: '必填' },
      { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
      { key: 'code', type: 'required', message: '必填' },
    ])

    const onSubmit = () => {
      validate()
    }
    return () => <MainLayout>
      {{
        icon: () => <Icon name='left' />,
        title: () => '登录',
        default: () => <div>
          <div flex="~ col center-center" p="t42px">
            <Icon w="64px" h="68px" name="mangosteen" />
            <h1 c="$app-name-text" font="bold" text="size-32px" >山竹记账</h1>
          </div>
          <Form onSubmit={onSubmit}>
            <FormItem label="邮箱地址" type="text" v-model={formData.email} error={errors.value.email?.[0]} placeholder="请输入邮箱，然后点击发送验证码"></FormItem>
            <FormItem label="验证码" type="validationCode" v-model={formData.code} error={errors.value.code?.[0]} placeholder="请输入六位数字"></FormItem>
            <FormItem p='t16px'>
              <Button>登录</Button>
            </FormItem>
          </Form>
        </div>,
      }}
    </MainLayout>
  },
})
