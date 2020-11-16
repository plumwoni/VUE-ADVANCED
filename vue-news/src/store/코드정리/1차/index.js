import Vue from 'vue';
import Vuex from 'vuex';
// actions를 모듈화 작업하면서 주석처리함
// import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

// module화 작업으로 추가
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: { // store에서는 computed 와 동일한 속성임
    // View의 Vue 파일의 computed 속성의 #3 방법
    fetchedAsk(state) {
      return state.ask;
    }
  },
  // mutations: {
  //   SET_NEWS(state, news) { // news는 commit에서 인자로 받은 데이터인자를 의미함(response.data)
  //     state.news = news;
  //   },
  //   SET_ASK(state, ask) {
  //     state.ask = ask;
  //   },
  //   SET_JOBS(state, jobs) {
  //     state.jobs = jobs;
  //   }
  // },
  // ----> 
  // mutations의 module화 작업
  // mutations: mutations, --> 축약 문법을 사용하여 다음 줄과 같이 표기
  mutations,
  /*** actions의 module화 작업으로 주석처리 
  actions: { // 비동기 호출은 모두 actions에서 수행함
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
  },
  *** actions의 모듈화 작업으로 주석처리*******/
 actions,
});