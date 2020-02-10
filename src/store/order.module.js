import { orderService } from '../services/orderService';
import {
  FETCH_ORDER_DETAILS,
  FETCH_RECENT_ORDER_HISTORY,
  SET_ORDER_DETAILS,
  SET_RECENT_ORDER_HISTORY
} from './actions';

const initialState = {
  order: {},
  orderHistory: {}
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_ORDER_DETAILS](context, orderId) {
    const { data } = await orderService.getOrderDetails(orderId);
    context.commit(SET_ORDER_DETAILS, data);
    return data;
  },
  async [FETCH_RECENT_ORDER_HISTORY](context, userId) {
    const { data } = await orderService.getRecentOrderHistory(userId);
    context.commit(SET_RECENT_ORDER_HISTORY, data);
    return data;
  }
};

export const mutations = {
  [SET_ORDER_DETAILS](state, order) {
    state.order = order;
  },
  [SET_RECENT_ORDER_HISTORY](state, orderHistory) {
    state.orderHistory = orderHistory;
  }
};

const getters = {
  order(state) {
    return state.order;
  },
  orderHistory(state) {
    return state.orderHistory;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
