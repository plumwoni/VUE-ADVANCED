<template>
  <div>
    <button @click="LoginUser1">Login</button>
    <ul>
      <li v-for="item in items" :key="item.id"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from '../utils/handler.js'

export default {
  data() {
    return {
      items: [],
    }
  },

  methods: {
    // async await 구문의 에러처리 방식은 try/catch 방식적용
    // 하기 console 로그를 보면 알겠지만 async/await 를 사용하면 싱크방식으로 동작한다. (단, axios 내에서는 여전히 비동기처리 함수이다)
    async LoginUser1() {
      try {
        console.log("0000");
        var res = axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log("1111");
        if ( res.data.id === 1) {
          console.log("2222");
          console.log('사용자가 인증되었습니다.');
          var list = axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
          console.log("3333");
        }
        console.log("4444");

      } catch (error) {
        handleException(error);
        console.error(error);
      }
    }
  },
}
</script>
