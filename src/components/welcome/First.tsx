import { defineComponent } from "vue";
import { Card } from "./Card";

export const First = defineComponent({
  setup() {
    return () => (
      <Card>
        <svg>
          <use xlinkHref="#pig"></use>
        </svg>
        <h2 m="t40px">
          会挣钱
          <br />
          还要会省钱
        </h2>
      </Card>
    );
  },
});
