import { combineReducers } from 'redux';
import reducer, { reducerFilter } from './reducer';

export default combineReducers({
  todoList: reducer,
});
