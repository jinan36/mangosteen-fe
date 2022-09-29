import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import logo from "../assets/icons/mangosteen.svg";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div h="100vh" flex="~ col">
        <header flex="~ shrink-0">
          <img src={logo} alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main flex="grow">
          <RouterView></RouterView>
        </main>
      </div>
    );
  },
});
