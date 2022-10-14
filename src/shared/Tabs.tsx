import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const Tab = defineComponent({
  name: 'Tab',
  props: {
    name: { type: String as PropType<string>, required: true },
  },
  setup(_, context) {
    return () => <div>{context.slots.default?.()}</div>
  },
})

export const Tabs = defineComponent({
  name: 'Tabs',
  props: {
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    shrink: {
      type: Boolean as PropType<boolean>,
      required: false,
    },
  },
  emits: ['update:selected'],
  setup(props, { emit, slots }) {
    return () => {
      const tabs = slots.default?.()
      if (!tabs)
        return () => null
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab)
          throw new Error('<Tabs> only accepts <Tab> as children')
      }

      const getItemBaseClass = () => props.shrink ? 'flex-grow-0 pl16px pr16px' : 'flex-grow-1'
      const getItemClass = (name?: string) => name === props.selected
        ? 'relative after:content-none after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-4px after:bg-$tabs-indicator-bg'
        : ''

      const getNavClass = () => props.shrink ? 'justify-start' : 'justify-between'

      return (
        <div>
          <ol class={getNavClass} flex="~" items="center" text="center $navbar-text" bg="$navbar-bg-end">
            {tabs.map(item => (
              <li
                flex="shrink-0"
                p="y12px"
                class={[getItemBaseClass(), getItemClass(item.props?.name)]}
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

