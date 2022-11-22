import { defineComponent } from 'vue'
import { $ref } from 'vue/macros'
import { FormItem } from '../../shared/Form'
import { Bars } from './Bars'
import { LineChart } from './LineChart'
import { PieChart } from './PieChart'

export const Charts = defineComponent({
  name: 'Charts',
  setup() {
    const category = $ref<'expenses' | 'income'>('expenses')

    return () => <div>
      <div p="16px">
        <FormItem label="类型" type="select" options={[
          { value: 'expenses', label: '支出' },
          { value: 'income', label: '收入' },
        ]} v-model={category} />
        <LineChart></LineChart>
        <PieChart></PieChart>
        <Bars></Bars>
      </div>
    </div>
  },
})
