import { defineComponent } from "vue";
import pig from "../../assets/icons/pig.svg";
import { Card } from "./Card";

export const First = defineComponent({
  setup() {
    return () => (
      <Card>
        <img src={pig} />
        <h2 mt40px>
          会挣钱
          <br />
          还要会省钱
        </h2>
      </Card>
    );
  },
});
