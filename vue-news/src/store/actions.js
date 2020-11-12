import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem } from '../api/index.js';

export default {
  // FETCH_NEWS: function() {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then( ({ data }) => {
        commit('SET_NEWS', data);
        return data;  // 화면에서 해당 데이터를 받아서 처리 혹은 UX적인 처리를 할 수 있도록 반환해준다
      })
      .catch( error => {
        console.error(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then( ({ data }) => {
        commit( 'SET_ASK', data);
        return data;
      })
      .catch( error => {
        console.error(error);
      })
  },
  FETCH_JOBS({ commit }) { // destructuring (구조 분해 할당) 으로 사용 
    fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JOBS', data);
        return data;
      })
      .catch(error => {
        console.error(error);
      })
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then( ({ data }) => {
        commit('SET_USER', data);
        return data;
      })
      .catch(error => {
        console.error(error);
      })
  },
  FETCH_ITEM({ commit }, itemId) {
    console.log("--"+ itemId);
    fetchItem(itemId)
      .then( ({data}) => {
        commit('SET_ITEM', data);
        return data;
      })
      .catch( error => {
        console.error(error);
      })
  }
}