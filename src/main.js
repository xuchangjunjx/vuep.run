import App from "./App.vue";
import Vue from "vue";
import "unfetch/polyfill";
import toasted from "vue-toasted";

Vue.use(toasted);

new Vue({
  el: "#app",
  render: h => h(App)
});
