import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const Tab = defineComponent({
  props: {
    name: { type: String as PropType<string>, required: true },
  },
  setup(_, context) {
    return () => <div>{context.slots.default?.()}</div>
  },
})

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    classPrefix: {
      type: String,
    },
  },
  emits: ['update:selected'],
  setup(props, { emit, slots }) {
    const cp = props.classPrefix
    return () => {
      const tabs = slots.default?.()
      if (!tabs)
        return () => null
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab)
          throw new Error('<Tabs> only accepts <Tab> as children')
      }
      const selectedCls = $computed(() => (name?: string) => name === props.selected
        ? 'relative after:content-none after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-4px after:bg-$tabs-indicator-bg'
        : '')

      return (
        <div class={[`${cp}_tabs`]}>
          <ol flex="~ between-center" text="center $navbar-text" bg="$navbar-bg-end" class={[`${cp}_tabs_nav`]}>
            {tabs.map(item => (
              <li
                flex="grow shrink-0"
                p="y12px"
                class={[`${cp}_tabs_nav_item`, selectedCls(item.props?.name)]}
                onClick={() => emit('update:selected', item.props?.name)}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div>{tabs.find(item => item.props?.name === props.selected)}</div>
        </div>
      )
    }
  },
})

