import { defineComponent, reactive, watchEffect } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '../../shared/Button'
import { Form, FormItem } from '../../shared/Form'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { Time } from '../../shared/time'
import { ItemSummary } from './ItemSummary'

export const ItemList = defineComponent({
  setup() {
    const selected = $ref('本月')

    const time = new Time()
    const customTime = reactive({
      start: new Time(),
      end: new Time(),
    })
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ]

    let overlayVisible = $ref(false)
    watchEffect(() => {
      if (selected === '自定义时间')
        overlayVisible = true
    })
    const onSubmitCustomTime = () => {
      overlayVisible = false
    }

    return () => <MainLayout>{
      {
        title: () => '山竹记账',
        icon: () => <Icon w="30px" h="30px" name="menu" />,
        default: () => (
          <>
            <Tabs v-model:selected={selected} shrink={true}>
              <Tab name="本月">
                <ItemSummary startDate={timeList[0].start.format()} endDate={timeList[0].end.format()} />
              </Tab>
              <Tab name="上月">
                <ItemSummary startDate={timeList[1].start.format()} endDate={timeList[1].end.format()} />
              </Tab>
              <Tab name="今年">
                <ItemSummary startDate={timeList[2].start.format()} endDate={timeList[2].end.format()} />
              </Tab>
              <Tab name="自定义时间">
                <ItemSummary startDate={customTime.start.format()} endDate={customTime.end.format()} />
              </Tab>
            </Tabs>
            <van-overlay show={overlayVisible} flex="~ center-center" border="~ color-red" bg="$overlay-mask-bg" >
              <div bg="$bg" w="80vw">
                <header bg="$main-color" p="y12px x16px" c="$dialog-header-text">
                  请选择时间
                </header>
                <main>
                  <Form onSubmit={onSubmitCustomTime}>
                    <FormItem label="开始时间" v-model={customTime.start} type="date" />
                    <FormItem label="结束时间" v-model={customTime.end} type="date" />
                    <FormItem>
                        <div flex="~">
                          <Button level="normal" flex="grow" attrType="button" onClick={() => overlayVisible = false}>取消</Button>
                          <Button flex="grow" m="l16px" attrType="submit">确定</Button>
                        </div>
                    </FormItem>

                  </Form>
                </main>
              </div>
            </van-overlay>
          </>
        ),
      }
    }</MainLayout>
  },
})
