import Axios from 'axios';
import { API__CUSTOMER_INFORMATION } from '../config.js';

export default class CustomerService {
  getCustomerInformation(userId) {
    return Axios.get(API__CUSTOMER_INFORMATION);
  }
}
