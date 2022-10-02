import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";

export const ItemCreate = defineComponent({
  setup(props, context) {
    const router = useRouter();
    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" onClick={() => router.back()}></Icon>,
          default: () => <div>main</div>,
        }}
      </MainLayout>
    );
  },
});
