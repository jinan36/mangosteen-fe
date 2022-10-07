import { defineComponent } from "vue";
import { allGroups, emojiList } from "../../assets/emoji/database";
import { MainLayout } from "../../layouts/MainLayout";
import { Button } from "../../shared/Button";
import { Icon } from "../../shared/Icon";

export const TagCreate = defineComponent({
  setup() {
    let selectedGroup = $ref(allGroups[0][1]);
    const emojis = $computed(() => {
      const find = emojiList.find((item) => item[0] === selectedGroup);
      if (find) {
        const [_, ...rest] = find;
        return [...rest[0]];
      } else {
        return [];
      }
    });
    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <Icon name="left" onClick={() => {}} />,
          default: () => (
            <form p="16px">
              <div mt="8px">
                <label>
                  <span>标签名</span>
                  <div flex="~" mt="4px">
                    <input
                      min-h="$input-min-height"
                      max-w="full"
                      flex="grow"
                      border="1 $input-border-color rd-$input-radius"
                      text="18px"
                      p="x16px"
                      shadow="formInputInner"
                      class="border-$error-color"
                    ></input>
                  </div>
                  <div mt="4px" c="$error-color" text="12px">
                    <span>必填</span>
                  </div>
                </label>
              </div>
              <div mt="8px">
                <label>
                  <span>符号</span>
                  <div flex="~" mt="4px">
                    <div
                      min-h="$input-min-height"
                      max-w="full"
                      flex="grow"
                      border="1 $input-border-color rd-$input-radius"
                      text="14px"
                      p="x1px"
                      font="emoji"
                    >
                      <nav flex="~ nowrap" overflow="auto" custom="scroll-hide">
                        {allGroups.map((group) => {
                          const cls =
                            group[1] === selectedGroup
                              ? "border-$emoji-nav-emoji-selected"
                              : "border-transparent";
                          return (
                            <span
                              class={cls}
                              flex="shrink-0"
                              inline="block"
                              p="8px"
                              border="b-3"
                              onClick={() => (selectedGroup = group[1])}
                            >
                              {group[0]}
                            </span>
                          );
                        })}
                      </nav>
                      <ol
                        flex="~ wrap"
                        text="22px"
                        leading="32px"
                        h="384px"
                        overflow="auto"
                        p="x4px"
                        custom="scroll-hide"
                      >
                        {emojis.map((emoji) => (
                          <li flex="shrink-0 grow-0" w="1/10" text="center">
                            {emoji}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div mt="4px" c="$error-color" text="12px">
                    <span>必填</span>
                  </div>
                </label>
              </div>
              <p text="center" p="y16px">
                记账时长按标签即可进行编辑
              </p>
              <div mt="8px">
                <div flex="~" mt="4px">
                  <Button flex="grow-1" min-h="$input-min-height" max-w="full">
                    确定
                  </Button>
                </div>
              </div>
            </form>
          ),
        }}
      </MainLayout>
    );
  },
});
