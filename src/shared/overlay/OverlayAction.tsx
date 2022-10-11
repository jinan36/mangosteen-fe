import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import type { IconNames } from '../Icon'
import { Icon } from '../Icon'
import classes from './OverlayAction.module.styl'

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
      <RouterLink class={classes.wrapper} to={props.to}>
        <Icon name={props.iconName} />
        <span>{slots.default?.()}</span>
      </RouterLink>
    )
  },
})
