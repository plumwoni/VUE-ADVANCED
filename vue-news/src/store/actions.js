/*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
// import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem, fetchList } from '../api/index.js';
import { fetchUserInfo, fetchItem, fetchList } from '../api/index.js';

export default {
  // FETCH_NEWS: function() {
  /*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then( ({ data }) => {
  //       commit('SET_NEWS', data);
  //       return data;  // 화면에서 해당 데이터를 받아서 처리 혹은 UX적인 처리를 할 수 있도록 반환해준다
  //     })
  //     .catch( error => {
  //       console.error(error);
  //     });
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then( ({ data }) => {
  //       commit( 'SET_ASK', data);
  //       return data;
  //     })
  //     .catch( error => {
  //       console.error(error);
  //     })
  // },
  // FETCH_JOBS({ commit }) { // destructuring (구조 분해 할당) 으로 사용 
  //   fetchJobsList()
  //     .then( ({ data }) => {
  //       commit('SET_JOBS', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  // },
  FETCH_LIST({ commit }, listName) {
    // fetchList()의 결과값을 리턴하지 않으면 호출한 쪽의 비동기처리 부분에서 then()이 정상 동작하지 않음
    return fetchList(listName)
      .then( ({ data }) => {
        commit('SET_LIST', data);
        return data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then( ({ data }) => {
        commit('SET_USER', data);
        return data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    console.log("--"+ itemId);
    return fetchItem(itemId)
      .then( ({data}) => {
        commit('SET_ITEM', data);
        return data;
      })
      .catch( error => {
        console.error(error);
      });
  }
}