<template>
  <!-- div 태그에 스타일 넣기 : class="header" 입력 -->
  <div class="header">
    <router-link to="/news">News</router-link> | 
    <router-link to="/ask">Ask</router-link> | 
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped> /* scoped 로 해당 파일에서만 적용되는 스타일임을 등록함 */
/* 브라우저 개발자모드의 'style'에서 직접 속성들을 넣어보고 해당 내용을 복사해서 붙여넣음 */
.header {
  color: white;
  background-color: #4db883;
  display: flex;
  padding: 8px 8px 8px 8px;
}

/**
.header a:active {} 클래스 속성 변경을 위해서 브라우저 개발자모드 검사로 active 인 anker 태그를 검사하면 
    vue 에서 스타일링 된 속성이 아래와 같다. 해당 속성값 복붙하여 하기와 같이 직접 설정하자.
class="router-link-exact-active router-link-active" --> 이중에서 하나만 사용하자
*/
.header .router-link-exact-active {
  color: blue
}
.header a {
  color: white
}
</style>