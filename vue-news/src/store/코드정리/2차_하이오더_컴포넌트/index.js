import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    /*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
    // news: [],
    // ask: [],
    // jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters: { // store에서는 computed 와 동일한 속성임
    /*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
    // fetchedAsk(state) {
    //   return state.ask;
    // },
    // fetchedNews(state) {
    //   return state.news;
    // },
    // fetchedJobs(state) {
    //   return state.jobs;
    // },
    fetchedUser(state) {
      return state.user;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions,
});