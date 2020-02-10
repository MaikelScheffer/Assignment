import Vue from 'vue';
import VueRouter from 'vue-router';
import OrderOverviewPage from '../views/OrderOverviewPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'orders',
    component: OrderOverviewPage,
    children: [
      {
        path: ':id',
        name: 'orderDetail',
        component: () => import('../views/OrderDetailPage.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
