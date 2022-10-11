import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import type { IconNames } from '../Icon'
import { Icon } from '../Icon'

export const OverlayAction = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconNames>,
      required: true,
    },
    to: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () => (
      <RouterLink flex="~ start-center" p="y12px x16px" to={props.to}>
        <Icon name={props.iconName} />
        <span>{slots.default?.()}</span>
      </RouterLink>
    )
  },
})
