export default function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + action.payload,
      };
    case 'decrement':
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
