import Vue from 'vue'
import App from './App.vue'
import Home from './home'

Vue.config.productionTip = false

Vue.component("app-servers",Home)

new Vue({
  render: h => h(App),
}).$mount('#app')
