<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };    
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    stopSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    // .env 에 설정한 변수명을 아래와 같이 활용할 수 있음 (created() 에서 활용함)
    // prefix 'VUE_' 사용
    console.log( process.env.VUE_APP_TITLE );
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.stopSpinner);
  },
  beforeDestroy() {
    // event 객체가 쌓이지 않게 해제해 줘야함
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.stopSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
