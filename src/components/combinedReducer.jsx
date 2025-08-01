import { combineReducers, createStore } from "redux";
import { CartReducer } from "./CartREduce";
import { themeReducer } from "./Theme";

const rootReducer = combineReducers({
    theme: themeReducer,
    cart: CartReducer,
});
export const store = createStore(rootReducer);
