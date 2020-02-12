import Vue from 'vue';
import Vuex from 'vuex';

import core from './core.module';
import customer from './customer.module';
import order from './order.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { core, customer, order }
});
