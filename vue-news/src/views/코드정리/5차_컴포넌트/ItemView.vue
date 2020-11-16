<template>
  <div>
    <!-- 질문 상세 정보 -->
    <section>
      <!-- 사용자 프로필 -->
      <user-profile :info="fetchedItem">
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">{{ fetchedItem.time_ago }}</template>
      </user-profile>

    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
    <!-- {{ this.$store.state.item }} // 개발 시 참조로 활용할 때 좋음 -->
  </div>
</template>

<script>
import UserProfile from '../components/UserPfofile.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    UserProfile,
  },
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