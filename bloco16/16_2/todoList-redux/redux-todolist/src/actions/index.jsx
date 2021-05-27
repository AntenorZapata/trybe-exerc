import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
  PROGRESS_TODO,
  FILTER_COMPLETED,
  FILTER_INPROGRESS,
  FILTER_ALL,
} from '../actions/types';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
}

export function removeTodo() {
  return {
    type: DELETE_TODO,
  };
}

export function completeTodo(todo) {
  return {
    type: COMPLETED_TODO,
    payload: {
      todo,
    },
  };
}

export function progressTodo(todo) {
  return {
    type: PROGRESS_TODO,
    payload: {
      todo,
    },
  };
}

export function filterAll() {
  return {
    type: FILTER_ALL,
  };
}
