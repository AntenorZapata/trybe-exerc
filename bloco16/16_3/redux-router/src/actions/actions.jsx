import {
  REGISTER_CUSTOMER,
  DELETE_CUSTOMER,
  LOGIN,
  REGISTER_CLIENT,
  SORT,
} from './types';

export function registerUser(email, password) {
  return {
    type: REGISTER_CUSTOMER,
    payload: {
      email,
      password,
    },
  };
}

export function registerNewClient(name, age, email) {
  return {
    type: REGISTER_CLIENT,
    payload: {
      name,
      age,
      email,
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

export function sort() {
  return {
    type: SORT,
  };
}

export function login() {
  return {
    type: LOGIN,
  };
}
