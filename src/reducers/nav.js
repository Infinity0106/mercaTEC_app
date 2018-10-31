import { NavigationActions } from "react-navigation";
import { RootNavigator } from "./../router";

const initialState = RootNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = initialState, action) => {
  let newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};
