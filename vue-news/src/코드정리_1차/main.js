import Vue from 'vue'
import App from './App.vue'
// routes/index.js에서 export를 'default' 로 하면 아래와 같이 import 선언해도 됨
// default 는 해당 1개만 export 한다는 의미로서 default로 안하면 배열로서 {}로 감싸야 함 (ES6 문법)
//import router from './routes/index.js'
import { router } from './routes/index.js'
import { store } from './store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router: router,  --> 축약문법
  router: router,
  store,
}).$mount('#app')
