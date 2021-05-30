import {
  REGISTER_CUSTOMER,
  DELETE_CLIENT,
  LOGIN,
  REGISTER_CLIENT,
  SORT,
} from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  newUsers: [],
  customers: [],
  isActive: false,
  sorted: false,
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
        sorted: !state.sorted,
      };
    }

    case LOGIN:
      return {
        ...state,
        isActive: !state.isActive,
      };

    case DELETE_CLIENT:
      return {
        ...state,
        customers: state.customers.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

export function sortReducer(customers, sorted) {
  switch (sorted) {
    case true:
      return [...customers].sort((a, b) => {
        const name1 = a.name.toUpperCase();
        const name2 = b.name.toUpperCase();
        return name1.localeCompare(name2);
      });

    case false:
      return customers;

    default: {
      return customers;
    }
  }
}
