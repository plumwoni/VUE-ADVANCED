<template>
  <div>
    <!-- 질문 상세 정보 -->
    <section>
      <!-- 사용자 프로필 -->
      <user-profile :info="fetchedItem">
        <!-- 일부 컴포넌트에서 이름에 링크를 걸고 싶을 때 router-link와 slot을 사용함 -->
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${ fetchedItem.user }`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted '+ fetchedItem.time_ago }}</template>
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
import bus from '../utils/bus.js';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([ 'fetchedItem' ]),
  },
  created() {
    const itemId = this.$route.params.id;
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_ITEM', itemId)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.error(error);
        });
    }, 3000);
    
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