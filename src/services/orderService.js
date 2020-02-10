import Axios from 'axios';
import { API__ORDER_DETAILS, API__LAST_FIVE_ORDERS } from '../config.js';

export const orderService = {
  getOrderDetails: orderId => Axios.get(API__ORDER_DETAILS),
  getRecentOrderHistory: userId => Axios.get(API__LAST_FIVE_ORDERS)
};
