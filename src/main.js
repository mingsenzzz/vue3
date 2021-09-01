import { createApp } from "vue";
import App from "./App.vue";
import { Button, Field, RadioGroup, Radio, Cell, CellGroup } from "vant";
import router from "./router";

const app = createApp(App);
app
  .use(Button)
  .use(Field)
  .use(RadioGroup)
  .use(Radio)
  .use(Cell)
  .use(CellGroup);

app.use(router);
app.mount("#app");
