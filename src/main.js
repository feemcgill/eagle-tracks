import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from "vue-gtag";
import App from './App.vue'
import Home from './views/Home.vue'
import Square from './views/Square.vue'


Vue.use(VueGtag, {
  config: { id: "UA-158456330-1" }
});

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/square', component: Square }
]


const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
