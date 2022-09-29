import { createApp } from "vue";
import { App } from "./App";
import { Foo } from "./views/Foo";
import { Bar } from "./views/Bar";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
