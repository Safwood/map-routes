import type { App } from "@/main";
import UInput from "./UButton.vue";

const components = [{ name: "UInput", component: UInput }];

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
