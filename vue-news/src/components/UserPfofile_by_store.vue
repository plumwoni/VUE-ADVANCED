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
        <div>{{ userInfo.id }}</div>
        <div class="time">{{ userInfo.created }}</div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
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