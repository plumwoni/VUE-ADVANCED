import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false

// 플러그인 사용
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
