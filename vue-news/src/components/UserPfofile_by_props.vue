<template>
<div>
  <section>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
      <div>
        <!-- 사용자 프로필 -->
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <div>{{ info.id }}</div>
        <div class="time">{{ info.created }}</div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  // store를 이용하면 computed를 사용. But props를 사용할 수 있음
  // 이전의 이 파일에서 사용했던 computed 속성은 view 쪽으로 옮겨서 props를 넘겨주도록 함
  props: {
    info: Object,
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items:center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>