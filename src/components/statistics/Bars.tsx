import { computed, defineComponent, reactive } from 'vue'

export const Bars = defineComponent({
  name: 'Bars',
  setup() {
    const data = reactive([
      { tag: { id: 1, name: '房租', sign: 'x' }, amount: 3000 },
      { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 1000 },
      { tag: { id: 3, name: '娱乐', sign: 'x' }, amount: 900 },
    ])
    const betterData = computed(() => {
      const total = data.reduce((sum, item) => sum + item.amount, 0)
      return data.map(item => ({
        ...item,
        percent: `${Math.round(item.amount / total * 100)}%`,
      }))
    })
    return () => <div mb="128px">
      {
        betterData.value.map(({ tag, amount, percent }, index) => {
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
  },
})
