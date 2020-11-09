import Vue from 'vue';
import VueRouter from 'vue-router';
// 1. import {} from '../' 이런식으로 타이핑하여 자동완성으로 찾아감
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news' // redirect
    },
    {
      path: '/news',
      component: () => import('@/views/NewsView.vue'), // news-view에 해당하는 페이지만 들고온다.
    },
    {
      path: '/ask',
      component: AskView, // 상기 임포트하여 사용할 수도 있음
    },
    {
      path: '/jobs',
      component: JobsView,
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