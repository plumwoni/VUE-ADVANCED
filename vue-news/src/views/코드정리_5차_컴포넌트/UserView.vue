<template>
  <div>
    <user-pfofile :info="userInfo"></user-pfofile>
  </div>
</template>

<script>
/**
 * 1. UserProfile에서 computed로 접근 (vuex 지향적 접근법))
 *    UserView dispatch -> store.actions -> API RQ -> API RS -> store.state -> UserProfile computed
 * 2. UserView에서 props로 전달 (컴포넌트 간 데이터 명확도 상향 접근법)
 *    UserView dispatch -> store.actions -> API RQ -> API RS -> store.state -> UserView computed -> UserProfile props
 */
import UserPfofile from '../components/UserPfofile.vue'

export default {
  components: {
    UserPfofile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    // vuex를 사용하기에 store를 view에서 dispatch하고 컴포넌트에서 불러서 사용할 수 있음
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>