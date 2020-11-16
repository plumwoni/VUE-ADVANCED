import axios from 'axios'

// 1. HTTP Request & Response 와 관련한 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
/*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
// function fetchNewsList() {
//   // return axios.get(config.baseUrl + 'news/1.json');
//   return axios.get(`${config.baseUrl}news/1.json`); // ES6 template string (backtick ` 사용)
// }

// function fetchAskList() {
//   return axios.get(`${config.baseUrl}ask/1.json`);
// }

// function fetchJobsList() {
//   return axios.get(`${config.baseUrl}jobs/1.json`);
// }

function fetchList(listName) {
  return axios.get(`${config.baseUrl}${listName}/1.json`)
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItem(itemId) {
  console.log(`${config.baseUrl}item/${itemId}.json`);
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

// 3. 함수들을 export 
export {
  /*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
  // fetchNewsList,
  // fetchAskList,
  // fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItem,
}