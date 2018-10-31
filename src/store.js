import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import { RootNavigator } from "./router";
import reducer from "./reducers";

const navMiddleWare = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const middleWare = applyMiddleware(
  logger,
  thunk,
  promiseMiddleware(),
  navMiddleWare
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");
const Store = createStore(reducer, {}, middleWare);
export { Store, AppWithNavigationState };
