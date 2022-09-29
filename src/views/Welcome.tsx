import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import logo from "../assets/icons/mangosteen.svg";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div h-100vh flex="~ col" bg-gradient-to-b from-hex-5d33be to-hex-8f4cd7>
        <header
          flex="~ shrink-0 col"
          justify-center
          items-center
          pt66px
          c-hex-d4d4ee
        >
          <img src={logo} alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main flex="~ grow col">
          <RouterView></RouterView>
        </main>
      </div>
    );
  },
});
