export default {
  SET_NEWS(state, news) { // news는 commit에서 인자로 받은 데이터인자를 의미함(response.data)
    state.news = news;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, userInfo) {
    state.user = userInfo;
  },
  SET_ITEM(state, item) {
    state.item = item;
  }
} 