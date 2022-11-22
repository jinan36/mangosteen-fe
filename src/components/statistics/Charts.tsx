import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
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

    const data3 = reactive([
      { tag: { id: 1, name: '房租', sign: 'x' }, amount: 3000 },
      { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 1000 },
      { tag: { id: 3, name: '娱乐', sign: 'x' }, amount: 900 },
    ])
    const betterData3 = computed(() => {
      const total = data3.reduce((sum, item) => sum + item.amount, 0)
      return data3.map(item => ({
        ...item,
        percent: `${Math.round(item.amount / total * 100)}%`,
      }))
    })
    return () => <div>
      <div p="16px">
        <FormItem label="类型" type="select" options={[
          { value: 'expenses', label: '支出' },
          { value: 'income', label: '收入' },
        ]} v-model={category} />
        <div ref={refDiv} h="128px"></div>
        <div ref={refDiv2} h="100vw"></div>
        <div mb="128px">
          {
            betterData3.value.map(({ tag, amount, percent }, index) => {
              const bgMap = ['bg-#eba953', 'bg-#53a867', 'bg-#91cc75']
              return (
                <div mt="16px" flex="~ between-center">
                  <div flex="~ center-center grow-0 shrink-0" w="48px" h="48px" bg="$tag-bg" rd='1/2'>
                    {tag.sign}
                  </div>
                  <div ml="8px" flex="grow shrink">
                    <div c="$text-muted" flex='~ between-center'>
                      <span>{tag.name} - {percent}</span>
                      <span>￥{amount}</span>
                    </div>
                    <div h="8px" rd="4px" bg="$bar-bg" pos="relative" overflow="hidden" mt="4px">
                      <div class={[bgMap[index]]} pos="absolute" top="0" left="0" h="full" w="42px"></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  },
})
