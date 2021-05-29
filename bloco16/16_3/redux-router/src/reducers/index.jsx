import { REGISTER_CUSTOMER, DELETE_CUSTOMER } from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  newUsers: [],
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

    case DELETE_CUSTOMER:
      return state;

    default:
      return state;
  }
}
