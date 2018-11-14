import * as Backend from "./../../backend";

export function goLogout() {
  let self = this;
  this.props
    .dispatch({
      type: "REQUEST_LOGOUT",
      payload: Backend.logout()
    })
    .then(() => {
      self.props.navigation.navigate("OnBoarding");
    })
    .catch(() => {
      self.props.navigation.navigate("OnBoarding");
    });
}

export function goHistory() {
  this.props.navigation.navigate("History");
}
