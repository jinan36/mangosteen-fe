import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import logo from "../assets/icons/mangosteen.svg";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div
        h="[calc(100vh-var(--welcome-nav-height))]"
        flex="~ col"
        bg-gradient-to-b
        from="$welcome-bg-start"
        to="$welcome-bg-end"
        mb="$welcome-nav-height"
      >
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
