import { combineReducers } from "redux";
import currency from "./currencyReducer";
import cart from "./cartReducer";
import overlay from "./overlayReducer";

export default combineReducers({
  currency,
  cart,
  overlay,
});
