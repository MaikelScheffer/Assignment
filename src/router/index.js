import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomerProfilePage from '../views/CustomerProfilePage.vue';

Vue.use(VueRouter);

const routes = [
  // hard redirect to a customer for demo purposes
  { path: '/', redirect: '/profile/123' },
  {
    path: '/profile/:userId',
    component: CustomerProfilePage,
    children: [
      {
        path: '/orders',
        name: 'order-overview',
        component: () => import('@/views/sub-views/OrderOverviewPage')
      },
      {
        path: '/orders/:orderId',
        name: 'order-detail',
        component: () => import('@/views/sub-views/OrderDetailPage')
      },
      { path: '/', redirect: { name: 'order-overview' } }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
