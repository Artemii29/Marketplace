import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "~/App.vue";

import "@kirklin/reset-css/kirklin.css";
import "~/styles/tailwind.css";
import "~/styles/main.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
