import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem } from '../api/index.js';

export default {
  // FETCH_NEWS: function() {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then( ({ data }) => {
        console.log(data);
        commit('SET_NEWS', data);
      })
      .catch( error => {
        console.error(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then( ({ data }) => {
        console.log(data);
        commit( 'SET_ASK', data);
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
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then( ({ data }) => {
        console.log(data);
        commit('SET_USER', data);
      })
      .catch(error => {
        console.error(error);
      })
  },
  FETCH_ITEM({ commit }, itemId) {
    console.log("--"+ itemId);
    fetchItem(itemId)
      .then( ({data}) => {
        console.log(data);
        commit('SET_ITEM', data);
      })
      .catch( error => {
        console.error(error);
      })
  }
}