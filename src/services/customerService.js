import Axios from 'axios';
import { API__CUSTOMER_INFORMATION } from '../config.js';

export const customerService = {
  getCustomerInformation: userId => Axios.get(API__CUSTOMER_INFORMATION)
};
