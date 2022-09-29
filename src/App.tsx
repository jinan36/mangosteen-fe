import { defineComponent } from "vue";

export const App = defineComponent({
  setup() {
    let count = $ref(1);
    const onClick = () => {
      count += 1;
    };
    return () => (
      <>
        <div>{count}</div>
        <div>
          <button onClick={onClick}>+1</button>
        </div>
      </>
    );
  },
});
