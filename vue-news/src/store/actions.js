import { fetchUserInfo, fetchItem, fetchList } from '../api/index.js';
import { handleException } from '../utils/handler.js'

export default {
  // async
  async FETCH_LIST({ commit }, listName) {
    try {
      const response = await fetchList(listName);
      commit('SET_LIST', response.data);
      commit('SET_LIST', response.data);
      return response; // 꼭 반환해야 함. Promise 객체가 반환됨
    } catch (error) {
      handleException(error);
    }
  },
  async FETCH_USER({ commit }, userName) {
    try {
      const response = await fetchUserInfo(userName);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      handleException(error);
    }
  },
  async FETCH_ITEM({ commit }, itemId) {
    // 에러 처리는 api 쪽에서 진행함
    const response = await fetchItem(itemId);
    commit('SET_ITEM', response.data);
    return response;
  },
}