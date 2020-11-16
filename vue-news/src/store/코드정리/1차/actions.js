import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default {
  // 비동기 호출은 모두 actions에서 수행함
  // 향상된 객체 정의법으로 축약된 형태의 문법임
  // 원래는 다음 주석문과 같음
  // FETCH_NEWS: function() {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then( response => {
        console.log(response.data);
        // state.news = response.data; --> mutations 에 정의되는 함수를 사용하여 변화시켜야 함
        // 그 때, context에 있는 commit 함수의 인자로 mutations에 실행할 함수와 그 함수에 넘길 데이터를 준다
        context.commit('SET_NEWS', response.data);
      })
      .catch( error => {
        console.error(error);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then( response => {
        console.log(response.data);
        context.commit( 'SET_ASK', response.data);
      })
      .catch( error => {
        console.error(error);
      })
  },
  FETCH_JOBS({ commit }) { // destructuring (구조 분해 할당) 으로 사용 
    fetchJobsList()
      .then( ({ data }) => {
        console.log(data);
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.error(error);
      })
  }
}