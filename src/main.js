import Vue from 'vue'
import App from './App.vue'
import Home from './screens/Home.vue'
import Frappe from 'vue2-frappe';
import VueRouter from "vue-router"

Vue.use(Frappe);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path : "", component : Home }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
