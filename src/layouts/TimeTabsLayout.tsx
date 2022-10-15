import type { PropType } from 'vue'
import { defineComponent, reactive } from 'vue'
import { $ref } from 'vue/macros'
import { Button } from '../shared/Button'
import { Form, FormItem } from '../shared/Form'
import { OverlayIcon } from '../shared/Overlay'
import { Tab, Tabs } from '../shared/Tabs'
import { Time } from '../shared/time'
import { MainLayout } from './MainLayout'

const typeComponent = defineComponent({
  props: {
    startDate: String,
    endDate: String,
  },
})

export const TimeTabsLayout = defineComponent({
  name: 'TimeTabsLayout',
  props: {
    component: {
      type: Object as PropType<typeof typeComponent>,
      required: true,
    },
  },
  setup(props) {
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
    const onSubmitCustomTime = () => {
      overlayVisible = false
    }

    return () => <MainLayout>{
      {
        title: () => '山竹记账',
        icon: () => <OverlayIcon />,
        default: () => (
          <>
            <Tabs v-model:selected={selected} shrink={true} onUpdate:selected={(value: string) => {
              if (value === '自定义时间')
                overlayVisible = true
            }}>
              <Tab name="本月">
                <props.component startDate={timeList[0].start.format()} endDate={timeList[0].end.format()} />
              </Tab>
              <Tab name="上月">
                <props.component startDate={timeList[1].start.format()} endDate={timeList[1].end.format()} />
              </Tab>
              <Tab name="今年">
                <props.component startDate={timeList[2].start.format()} endDate={timeList[2].end.format()} />
              </Tab>
              <Tab name="自定义时间">
                <props.component startDate={customTime.start.format()} endDate={customTime.end.format()} />
              </Tab>
            </Tabs>
            <van-overlay show={overlayVisible} flex="~ center-center" bg="$overlay-mask-bg" >
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
