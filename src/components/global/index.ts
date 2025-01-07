import type { App } from "@/main";
import USidePanelFilter from "./USidePanelFilter.vue";
import USidePanelItem from "./USidePanelItem.vue";
import USidePanelList from "./USidePanelList.vue";
import UIconButton from "./UIconButton.vue";

const components = [
  { name: "USidePanelFilter", component: USidePanelFilter },
  { name: "USidePanelItem", component: USidePanelItem },
  { name: "USidePanelList", component: USidePanelList },
  { name: "UIconButton", component: UIconButton },
];

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
