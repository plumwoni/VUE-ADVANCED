import Vue from 'vue';
import VueRouter from 'vue-router';
// 1. import {} from '../' 이런식으로 타이핑하여 자동완성으로 찾아감
/*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';
import createListView from '../views/CreateListView.js';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/news' // redirect
    },
    {
      path: '/news',
      name: 'news',
      // component: () => import('@/views/NewsView.vue'), // news-view에 해당하는 페이지만 들고온다.
      component: createListView('NewsView'), // view에 생성된 이름으로 하자!
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView, // 상기 임포트하여 사용할 수도 있음
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      /*** 하이 오더 컴퍼넌트로 하기 news, ask, jobs 함수는 주석처리 */
      // component: JobsView,
      component: createListView('JobsView'),
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
  ]
});

// export default router;