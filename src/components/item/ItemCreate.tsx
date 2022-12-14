import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { $computed, $ref } from 'vue/macros'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'

const Tag = defineComponent({
  name: 'Tag',
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
  name: 'ItemCreate',
  setup() {
    const router = useRouter()
    const kind = $ref('ๆฏๅบ')

    let selectedTagId = $ref<number>()
    const onSelectTag = (tag: typeof expensesTags[0]) => {
      selectedTagId = tag.id
    }
    const expensesTags = $ref([
      { id: 1, name: '้ค่ดน', sign: '๐', category: 'expenses' },
      { id: 2, name: 'ๆ่ฝฆ', sign: '๐', category: 'expenses' },
      { id: 3, name: '่้ค', sign: '๐', category: 'expenses' },
      { id: 4, name: 'ๆ่ฝฆ', sign: '๐', category: 'expenses' },
      { id: 5, name: '่้ค', sign: '๐', category: 'expenses' },
      { id: 6, name: 'ๆ่ฝฆ', sign: '๐', category: 'expenses' },
      { id: 7, name: '่้ค', sign: '๐', category: 'expenses' },
    ])
    const incomeTags = $ref([
      { id: 8, name: 'ๅทฅ่ต', sign: '๐', category: 'income' },
      { id: 9, name: 'ๅฝฉ็ฅจ', sign: '๐', category: 'income' },
      { id: 10, name: 'ๆปดๆปด', sign: '๐', category: 'income' },
      { id: 11, name: 'ๅฝฉ็ฅจ', sign: '๐', category: 'income' },
      { id: 18, name: 'ๆปดๆปด', sign: '๐', category: 'income' },
      { id: 17, name: 'ๅฝฉ็ฅจ', sign: '๐', category: 'income' },
      { id: 19, name: 'ๆปดๆปด', sign: '๐', category: 'income' },
    ])
    return () => (
      <MainLayout>
        {{
          title: () => '่ฎฐไธ็ฌ',
          icon: () => <Icon name="left" onClick={() => router.back()}></Icon>,
          default: () => (
            <div flex="~ col" h="[calc(100vh-88px)]">
              <Tabs flex="grow shrink" overflow="auto" v-model:selected={kind}>
                <Tab flex="~ wrap" p="t16px" name="ๆฏๅบ">
                  <Tag text="ๆฐๅข" onClick={() => router.push('/tags/create')}><Icon name="add" fill="$main" /></Tag>
                  {expensesTags.map(tag => <Tag text={tag.name} selected={tag.id === selectedTagId} onClick={() => onSelectTag(tag)}>{tag.sign}</Tag>)}
                </Tab>
                <Tab flex="~ wrap" p="t16px" name="ๆถๅฅ">
                  <Tag text="ๆฐๅข" onClick={() => router.push('/tags/create')}><Icon name="add" fill="$main" /></Tag>
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

