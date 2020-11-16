export default {
  /*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
  // SET_NEWS(state, news) { // news는 commit에서 인자로 받은 데이터인자를 의미함(response.data)
  //   state.news = news;
  // },
  // SET_ASK(state, ask) {
  //   state.ask = ask;
  // },
  // SET_JOBS(state, jobs) {
  //   state.jobs = jobs;
  // },
  SET_USER(state, userInfo) {
    state.user = userInfo;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list;
  }
} 