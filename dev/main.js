import Vue from "vue";
import App from "./App.vue";
import Winui from "../src/index";

Vue.use(Winui);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
