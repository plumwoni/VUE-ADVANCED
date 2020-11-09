<template>
  <div id="app">
    <!-- 1 router view 출력 
    <router-view></router-view -->

    <!-- 2 router link 연결할 UI 생성 => 헤더 정보이므로 컴포넌트로 생성하자
    <span>News</span> |
    <span>Ask</span> |
    <span>Jobs</span -->

    <!-- 3 Toolbar 컴포넌트를 임포트하여 사용, router view 컴포넌트가 있어야 함 -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
