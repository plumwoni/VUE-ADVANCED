<template>
  <div>
    <!-- div v-for="item in this.$store.state.ask" :key="item.id">{{ item.title }} -->
    <div v-for="item in fetchedAsk" :key="item.id">{{ item.title }}</div>
  </div>

</template>

<script>
// #2번째 방법
// import { mapState } from 'vuex';
// #3번째 방법
import { mapGetters } from 'vuex'

export default {
  computed: {
    // #4번째 방법 (mapGetters의 배열 표기법)
    ...mapGetters([
      'fetchedAsk'
    ]),
    // #3번째 방법 (mapGetters의 객체 표기법)
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    // #2번째 방법
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #1번째 방법
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');

    // console.log('호출 전: ', this);
    // fetchAskList()
    //   .then( response => {
    //     console.log('호출 후: ', this); // 화살표 함수를 사용하면 this가 호출 전후에 동일한 객체를 가리킴.
    //     console.log(response.data);
    //     this.ask = response.data;
    //   })
    //   .catch( error => {
    //     console.error(error);
    //   });
  }
}
</script>

<style>

</style>