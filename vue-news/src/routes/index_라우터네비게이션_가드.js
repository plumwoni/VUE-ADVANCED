import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js'

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
      component: NewsView, 
      /* beforeEnter: (to, from, next) => {
        console.log('to', to);
        console.log('from', from);
        console.log(next); // function
        next(); // 이 함수를 호출하지 않으면 이동하지 않음
      } */
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner'); // 데이터를 불러와서 화면에 로딩후에도 스피너가 동작하고 있어서 화면(View)에서 호출하는 것으로 변경
            next();
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,                 // Mixin 사용시
      // component: createListView('AskView'),  // 하이오더 컴포넌트(HOC) 사용시
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            next();
          })
          .catch(error => {
            console.error(error);
          });
      }
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