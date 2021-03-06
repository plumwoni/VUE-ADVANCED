import ListView from './ListView.vue';
import bus from '../utils/bus.js';

/**
 * 하이 오더 컴포넌트
 */
export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    // example :
    //   el: '',
    //   data: '',
    //   components: {},
    //   created(),  --> 이런 것들이 들어갈 수 있음
    name,

    created() {
      console.log(name);
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.error(error);
        });
      // setTimeout(() => {
      //   this.$store.dispatch('FETCH_LIST', this.$route.name)
      //     .then(() => {
      //       console.log('fetched');
      //       bus.$emit('end:spinner');
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      // }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}