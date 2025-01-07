import type { App } from "@/main";
import USidePanel from "./USidePanel.vue";
import USidePanelItem from "./USidePanelItem.vue";
import USidePanelList from "./USidePanelList.vue";
import UIconButton from "./UIconButton.vue";

const components = [
  { name: "USidePanel", component: USidePanel },
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
