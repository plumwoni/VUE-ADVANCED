import axios from 'axios'

// 1. HTTP Request & Response 와 관련한 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
function fetchList(listName) {
  return axios.get(`${config.baseUrl}${listName}/1.json`)
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

async function fetchItem(itemId) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${itemId}.json`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// 3. 함수들을 export 
export {
  fetchList,
  fetchUserInfo,
  fetchItem,
}