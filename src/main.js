import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import i18n from './i18n';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

Vue.use(Buefy);
