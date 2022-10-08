import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'

const Tag = defineComponent({
  props: {
    text: String as PropType<string>,
    selected: Boolean as PropType<boolean>,
  },
  setup(props, { slots }) {
    const borderCls = $computed(() => props.selected ? 'border-$main' : 'border-$tag-bg')
    return () => (
      <div relative="~" w="20vw" h="[calc(20vw*1.14)]" flex="~ col" items="center">
        <div class={[borderCls]} w="12vw" h="12vw" bg="$tag-bg" border="~ rd-1/2" flex="~ center-center">
          {slots.default?.()}
        </div>
        <div text="size-12px" m="t4px" >
          {props.text}
        </div>
      </div>
    )
  },
})

export const ItemCreate = defineComponent({
  setup() {
    const router = useRouter()
    const kind = $ref('支出')

    let selectedTagId = $ref<number>()
    const onSelectTag = (tag: typeof expensesTags[0]) => {
      selectedTagId = tag.id
    }
    const expensesTags = $ref([
      { id: 1, name: '餐费', sign: '🎈', category: 'expenses' },
      { id: 2, name: '打车', sign: '🎈', category: 'expenses' },
      { id: 3, name: '聚餐', sign: '🎈', category: 'expenses' },
      { id: 4, name: '打车', sign: '🎁', category: 'expenses' },
      { id: 5, name: '聚餐', sign: '🎃', category: 'expenses' },
      { id: 6, name: '打车', sign: '🎁', category: 'expenses' },
      { id: 7, name: '聚餐', sign: '🎃', category: 'expenses' },
    ])
    const incomeTags = $ref([
      { id: 8, name: '工资', sign: '🎁', category: 'income' },
      { id: 9, name: '彩票', sign: '🎈', category: 'income' },
      { id: 10, name: '滴滴', sign: '🎃', category: 'income' },
      { id: 11, name: '彩票', sign: '🎁', category: 'income' },
      { id: 18, name: '滴滴', sign: '🎈', category: 'income' },
      { id: 17, name: '彩票', sign: '🎃', category: 'income' },
      { id: 19, name: '滴滴', sign: '🎈', category: 'income' },
    ])
    return () => (
      <MainLayout>
        {{
          title: () => '记一笔',
          icon: () => <Icon name="left" onClick={() => router.back()}></Icon>,
          default: () => (
            <div flex="~ col" h="[calc(100vh-88px)]">
              <Tabs flex="grow shrink" overflow="auto" v-model:selected={kind}>
                <Tab flex="~ wrap" p="t16px" name="支出">
                  <Tag text="新增" onClick={() => router.push('/tags/create')}><Icon name="add" fill="$main" /></Tag>
                  {expensesTags.map(tag => <Tag text={tag.name} selected={tag.id === selectedTagId} onClick={() => onSelectTag(tag)}>{tag.sign}</Tag>)}
                </Tab>
                <Tab flex="~ wrap" p="t16px" name="收入">
                  <Tag text="新增" onClick={() => router.push('/tags/create')}><Icon name="add" fill="$main" /></Tag>
                  {incomeTags.map(tag => <Tag text={tag.name} selected={tag.id === selectedTagId} onClick={() => onSelectTag(tag)}>{tag.sign}</Tag>)}
                </Tab>
              </Tabs>
              <div flex="grow-0 shrink-0">
                <InputPad />
              </div>
            </div>
          ),
        }}
      </MainLayout>
    )
  },
})

