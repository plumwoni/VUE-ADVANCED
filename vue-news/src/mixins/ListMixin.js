import bus from '../utils/bus.js'

export default {
  // 재사용할 컴포넌트 옵션
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch(error => {
        console.error(error);
      });
  },
}

/**
 * HOC
 */
// export default function create() {
//   // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
// }