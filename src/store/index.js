import Vue from 'vue';
import Vuex from 'vuex';

import customer from './customer.module';
import order from './order.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { customer, order }
});
