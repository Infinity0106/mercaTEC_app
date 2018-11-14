import { combineReducers } from "redux";

import nav from "./nav";
import error from "./error";
import product from "./product";
import shopping_bag from "./shopping_bag";
import user from "./user";
import landing from "./landing";
import history from "./history";

export default combineReducers({
  nav,
  error,
  product,
  shopping_bag,
  user,
  landing,
  history
});
