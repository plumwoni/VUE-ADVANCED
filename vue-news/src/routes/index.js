import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';
import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import createListView from '../views/CreateListView.js';
import Test from '../views/Test.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/',
      name: 'root',
      redirect: '/news' // redirect
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView, 
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,                 // Mixin 사용시
      component: createListView('AskView'),  // 하이오더 컴포넌트(HOC) 사용시
    },
    {
      path: '/jobs',
      name: 'jobs',
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