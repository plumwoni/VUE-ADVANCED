import Chart from 'chart.js';

export default {
  install(Vue) {
    /**
     * 모든 컴포넌트에서 사용할 때 전역인 prototype에 객체 생성
     * 사용은 샘플로 main.js 소스 참조
     * '$_'는 Vue에서 권고하는 플러그인 prefix
     */
    Vue.prototype.$_Chart = Chart;
  }
}