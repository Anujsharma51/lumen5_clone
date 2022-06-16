import { combineReducers, legacy_createStore as createStore } from "redux";
import { nameReducer } from "../reducer/reducer";
const root = combineReducers({
  name: nameReducer,
});

export const store = createStore(root);
