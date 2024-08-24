import { combineReducers, createStore } from "redux";
import userReducer from "./userInfo/reducers/userReducer";

const store = createStore(
  combineReducers({
    userInfo: userReducer,
  })
);

export default store;
