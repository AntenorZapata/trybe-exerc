import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
  PROGRESS_TODO,
} from '../actions/types';

const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [],
      };

    case COMPLETED_TODO:
      const bool = state.todos.find(
        (item) => item.id === action.payload.todo.id
      ).complete;

      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.todo.id
            ? { ...item, complete: !bool }
            : item
        ),
      };

    case PROGRESS_TODO:
      const progress = state.todos.find(
        (item) => item.id === action.payload.todo.id
      ).progress;

      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.todo.id
            ? { ...item, progress: !progress }
            : item
        ),
        allTodos: [...state.todos],
      };

    default:
      return state;
  }
}
