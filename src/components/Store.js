import { createStore } from 'redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


const store = createStore(counterReducer);


store.subscribe(() => {
  console.log('State changed:', store.getState());
});

store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'DECREMENT' }); 
