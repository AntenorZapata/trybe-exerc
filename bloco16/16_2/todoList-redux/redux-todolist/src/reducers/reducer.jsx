import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
  PROGRESS_TODO,
  FILTER_TODO,
} from '../actions/types';
import { v1 as uuidv1 } from 'uuid';

const initialState = {
  todos: [],
  filter: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv1(),
            task: action.payload.todo,
            complete: false,
            progress: false,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [],
      };

    case COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.todo.id
            ? { ...item, complete: !item.complete }
            : item
        ),
      };

    case PROGRESS_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.todo.id
            ? { ...item, progress: !item.progress }
            : item
        ),
        allTodos: [...state.todos],
      };

    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
}

export function filterTodos(todos, filter) {
  switch (filter) {
    case 'completed':
      return todos.filter((item) => item.complete === true);

    case 'all':
      return todos;

    case 'progress':
      return todos.filter((item) => item.progress === true);
    default:
      return todos;
  }
}
