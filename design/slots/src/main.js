import Vue from 'vue'
import App from './App.vue'  // slot 사용
// import App from './App_props.vue' // props 사용

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
