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
          <!-- 사용자 정보 -->
          <!-- div 말고 라우터링크로 구조화 -->
          <router-link :to="`/user/${ fetchedItem.user }`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- {{ fetchedItem.content }} -->
      <div v-html="fetchedItem.content"></div>
    </section>
    <!-- {{ this.$store.state.item }} // 개발 시 참조로 활용할 때 좋음 -->
    <!-- <p>{{ fetchedItem.title }}</p>
    <p>{{ fetchedItem.content }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([ 'fetchedItem' ]),
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    this.$store.dispatch('FETCH_ITEM', itemId);
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