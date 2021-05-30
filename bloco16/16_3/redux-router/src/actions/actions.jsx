import {
  REGISTER_CUSTOMER,
  DELETE_CLIENT,
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

export function deleteClient(id) {
  return {
    type: DELETE_CLIENT,
    payload: {
      id,
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
