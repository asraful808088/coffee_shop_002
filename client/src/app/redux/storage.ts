import { combineReducers, createStore } from "redux";
import cartProdectReducer from "./cart/reducer";
import favoriteReducer from "./favorite/reducer";
import { singleToastReducer } from "./toats/resucer";
import userReducer from "./userInfo/reducers/userReducer";

const store = createStore(
  combineReducers({
    userInfo: userReducer,
    singleToast: singleToastReducer,
    cartProdect: cartProdectReducer,
    favoriteReducer:favoriteReducer
  })
);

export default store;
