import Vue from 'vue';
import VueRouter from 'vue-router';
import OrderOverviewPage from '../views/OrderOverviewPage.vue';
import OrderDetailPage from '../views/OrderDetailPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'orders',
    component: OrderOverviewPage
  },
  {
    path: '/about',
    name: 'About',
    component: OrderDetailPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
