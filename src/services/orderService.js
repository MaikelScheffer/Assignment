import Axios from 'axios';
import { API__ORDER_DETAILS, API__LAST_FIVE_ORDERS } from '../config.js';

export default class OrderService {
  getOrderDetails(orderId) {
    return Axios.get(API__ORDER_DETAILS);
  }

  getRecentOrderHistory(userId) {
    return Axios.get(API__LAST_FIVE_ORDERS);
  }
}
