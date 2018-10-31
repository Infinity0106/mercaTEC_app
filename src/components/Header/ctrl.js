function findCurrentRoute(state) {
  if (state.index !== undefined) {
    return findCurrentRoute(state.routes[state.index]);
  }
  return state.routeName;
}

export function getCurrentRoute() {
  return findCurrentRoute(this.props.navigation.state);
}

export function goShoppingBag() {
  this.props.navigation.navigate("ShoppingBag");
}

export function goBackLanding() {
  this.props.navigation.navigate("Landing");
}

export function goBack() {
  this.props.navigation.goBack();
}

export function goAccount() {
  this.props.navigation.navigate("Account");
}

export function goBackBuy() {
  this.props.dispatch({
    type: "SET_SCANNER_ACTIVE_STATUS",
    value: true
  });

  this.props.navigation.navigate("Landing");
}

export function hideToast() {
  this.props.dispatch({
    type: "RESET_ERROR_STATE"
  });
}
