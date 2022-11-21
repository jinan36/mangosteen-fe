import { defineComponent, onMounted, ref } from 'vue'
import { $ref } from 'vue/macros'
import * as echarts from 'echarts'
import { FormItem } from '../../shared/Form'

export const Charts = defineComponent({
  name: 'Charts',
  setup() {
    const category = $ref<'expenses' | 'income'>('expenses')
    const refDiv = ref<HTMLDivElement>()
    const refDiv2 = ref<HTMLDivElement>()
    onMounted(() => {
      if (refDiv.value === undefined)
        return

      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(refDiv.value)
      // 绘制图表
      myChart.setOption({
        grid: [
          { left: 0, top: 0, right: 0, bottom: 20 },
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      })
    })
    onMounted(() => {
      if (refDiv2.value === undefined)
        return
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(refDiv2.value)
      // 绘制图表
      const option = {
        grid: [
          { left: 0, top: 0, right: 0, bottom: 20 },
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      myChart.setOption(option)
    })
    return () => <div>
      <div p="16px">
        <FormItem label="类型" type="select" options={[
          { value: 'expenses', label: '支出' },
          { value: 'income', label: '收入' },
        ]} v-model={category} />
        <div ref={refDiv} h="128px"></div>
        <div ref={refDiv2} h="100vw"></div>
      </div>
    </div>
  },
})
