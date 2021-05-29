import { REGISTER_CUSTOMER, DELETE_CUSTOMER } from './types';

export function registerCustomer(email, password) {
  return {
    type: REGISTER_CUSTOMER,
    payload: {
      email,
      password,
    },
  };
}

export function deleteCustomer(customer) {
  return {
    type: DELETE_CUSTOMER,
    payload: {
      customer,
    },
  };
}
