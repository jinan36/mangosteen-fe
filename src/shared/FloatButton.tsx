import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { Icon } from './Icon'
import type { IconNames } from './Icon'

export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconNames>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div
        bg="$float-button-bg"
        w="56px"
        h="56px"
        rd="1/2"
        flex="~"
        justify="center"
        items="center"
        fixed="~"
        bottom="16px"
        right="16px"
      >
        <Icon
          w="24px"
          h="24px"
          fill="$float-button-text"
          name={props.iconName}
        ></Icon>
      </div>
    )
  },
})
