import { customerService } from '../services/customerService';
import {
  FETCH_CUSTOMER_INFORMATION,
  SET_CUSTOMER_INFORMATION
} from './actions';

const initialState = {
  customer: {}
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_CUSTOMER_INFORMATION](context, orderId) {
    const { data } = await customerService.getOrderDetails(orderId);
    context.commit(SET_CUSTOMER_INFORMATION, data);
    return data;
  }
};

export const mutations = {
  [SET_CUSTOMER_INFORMATION](state, customer) {
    state.customer = customer;
  }
};

const getters = {
  customer(state) {
    return state.customer;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
