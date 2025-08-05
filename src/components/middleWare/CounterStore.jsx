import { applyMiddleware, createStore, compose } from "redux";
import { CounterReducer } from "./CounterReducer";

// Logger middleware
const Logger = (store) => (next) => (action) => {
    console.log("dispatching", action);
    const result = next(action);
    console.log("next state", store.getState());
    return result;
};

// Use Redux DevTools compose if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    CounterReducer,
    composeEnhancers(applyMiddleware(Logger))
);

export default store;
