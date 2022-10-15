import { defineComponent } from 'vue'
import { $ref } from 'vue/macros'
import { Form, FormItem } from '../../shared/Form'

export const Charts = defineComponent({
  name: 'Charts',
  setup() {
    const category = $ref<'expenses' | 'income'>('expenses')
    return () => <div>
      <Form>
        <FormItem label="类型" type="select" options={[
          { value: 'expenses', label: '支出' },
          { value: 'income', label: '收入' },
        ]} v-model={category} />
      </Form>
    </div>
  },
})
