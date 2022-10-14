import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { FloatButton } from '../../shared/FloatButton'

const TotalItem = defineComponent({
  name: 'TotalItem',
  props: {
    title: String as PropType<string>,
  },
  setup(props, { slots }) {
    return () => <li p="16px" flex="~ col" text="center"><span c="$total-income">{props.title}</span><span c="$total-expenses">{slots.default?.()}</span></li>
  },
})

const ListItem = defineComponent({
  name: 'ListItem',
  setup(props, { slots }) {
    return () => <li flex="~ between-start" border="b color-$button-border-color" p="y12px x16px">{slots.default?.()}</li>
  },
})

const ListItemTag = defineComponent({
  name: 'ListItemTag',
  setup(_, { slots }) {
    return () => <div flex="~ center-center grow-0 shrink-0" w="48px" h="48px" rd="1/2" bg="$tag-bg" m="x8px">
      {slots.default?.()}
    </div>
  },
})

const ListItemDetail = defineComponent({
  name: 'ListItemDetail',
  setup(_, { slots }) {
    return () => <div flex="grow shrink" mx="4px">{slots.default?.()}</div>
  },
})

export const ItemSummary = defineComponent({
  name: 'ItemSummary',
  props: {
    startDate: String,
    endDate: String,
  },
  setup() {
    return () => <div class="wrapper">
      <ul bg="$total-bg" flex="~" justify="between" c="$total-text" m="16px" rd="$button-radius" p="x16px">
        <TotalItem title="收入">128</TotalItem>
        <TotalItem title="支出">128</TotalItem>
        <TotalItem title="净收入">128</TotalItem>
      </ul>
      <ol class="list">
        <ListItem>
          <ListItemTag>
            <span>X</span>
          </ListItemTag>
          <ListItemDetail>
            <div flex="~" justify="between">
              <span c="$list-tag-text">旅行</span>
              <span c="$list-amount-text">￥1234</span>
            </div>
            <div c="$list-time-text" m="t4px">
              2000-01-01 12:39
            </div>
          </ListItemDetail>
        </ListItem>
      </ol>
      <div p="t32px" text="center">向下滑动加载更多</div>
      <FloatButton iconName='add' />
    </div>
  },
})
