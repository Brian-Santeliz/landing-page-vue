import Vue from "vue";
import App from "./Components/App.vue";
import router from "./Router/router";
import "./public/style.css";
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
