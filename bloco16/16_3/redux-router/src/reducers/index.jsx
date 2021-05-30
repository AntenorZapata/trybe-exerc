import {
  REGISTER_CUSTOMER,
  DELETE_CUSTOMER,
  LOGIN,
  REGISTER_CLIENT,
  SORT,
} from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  newUsers: [],
  customers: [],
  isActive: false,
  sort: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_CUSTOMER:
      return {
        ...state,
        newUsers: [
          ...state.newUsers,
          {
            id: uuidv4(),
            email: action.payload.email,
            password: action.payload.password,
          },
        ],
      };

    case REGISTER_CLIENT:
      return {
        ...state,
        customers: [
          ...state.customers,
          {
            id: uuidv4(),
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
          },
        ],
      };

    case SORT: {
      return {
        ...state,
        sort: !state.sort,
      };
    }

    case LOGIN:
      return {
        ...state,
        isActive: !state.isActive,
      };

    case DELETE_CUSTOMER:
      return state;

    default:
      return state;
  }
}

export function sortReducer(customers, sort) {
  switch (sort.type) {
    case false:
      return customers;

    case true:
      return customers.sort((a, b) => a.name - b.name);

    default: {
      return customers;
    }
  }
}
