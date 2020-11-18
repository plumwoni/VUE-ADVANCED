import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1
  render: function(createElement) {
    return createElement(App);
  },
  // 2 vue.js는 버츄얼돔 사용 (버츄얼돔에서 제일 많이 쓰이는 게 '하이퍼스크립트')
  //   createElement를 에바는 'h'(hiperscript 약자)로 줄여서 사용
  render: function(h) {
    return h(App);
  },
  // 3
  render: (h) => {
    return h(App);
  },
  // 4 ES6 에 따라 인자가 하나이기에...
  render: h => h(App),

}).$mount('#app')
