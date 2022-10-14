import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { allGroups, emojiList } from '../../assets/emoji/database'

export const EmojiSelector = defineComponent({
  name: 'EmojiSelector',
  props: {
    modelValue: String as PropType<string>,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let selectedGroup = $ref(allGroups[0][1])
    const emojis = $computed(() => {
      const find = emojiList.find(item => item[0] === selectedGroup)
      return find ? [...find[1]] : []
    })

    const onClickEmoji = (emoji: string) => {
      emit('update:modelValue', emoji)
    }
    return () => <div
      border="1 rd-$input-radius"
      text="20px"
      p="x1px"
      font="emoji"
    >
      <nav flex="~ nowrap" overflow="auto" custom="scroll-hide" border="b-1 $emoji-nav-border-color">
        {allGroups.map((group) => {
          const navClass = $computed(() => group[1] === selectedGroup
            ? 'border-$emoji-nav-emoji-selected'
            : 'border-transparent',
          )
          return (
            <span
              class={navClass}
              flex="shrink-0"
              inline="block"
              p="8px"
              border="b-3"
              onClick={() => (selectedGroup = group[1])}
            >
              {group[0]}
            </span>
          )
        })}
      </nav>
      <ol
        key={selectedGroup}
        flex="~ wrap"
        text="22px"
        leading="32px"
        h="384px"
        overflow="auto"
        p="x4px"
        custom="scroll-hide"
      >
        {emojis.map(emoji => (
          <li flex="~ center-center shrink-0 grow-0" w="1/10" overflow="hidden" onClick={() => onClickEmoji(emoji)}>
            {emoji}
          </li>
        ))}
      </ol>
    </div>
  },
})
