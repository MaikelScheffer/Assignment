import { customerService } from '../services/customerService';
import {
  FETCH_CUSTOMER_INFORMATION,
  SET_CUSTOMER_INFORMATION
} from './actions';

const initialState = {
  customer: {
    customerId: null,
    firstName: '',
    lastName: '',
    gender: '',
    language: 'en',
    currency: 'euro',
    emailAddress: '',
    birthday: '',
    address: '',
    registered: { date: '', age: 0 },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
    }
  }
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_CUSTOMER_INFORMATION](context, orderId) {
    const { data } = await customerService.getCustomerInformation(orderId);
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
