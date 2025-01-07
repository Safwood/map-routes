import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./components/global";
import { PerfectScrollbarPlugin } from "vue3-perfect-scrollbar";

import "vue3-perfect-scrollbar/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(globalComponents);
app.use(PerfectScrollbarPlugin);
app.mount("#app");

export type App = typeof app;
