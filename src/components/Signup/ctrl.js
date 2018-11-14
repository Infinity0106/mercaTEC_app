import * as Backend from "./../../backend";

export function signup() {
  let self = this;
  if (this.props.user.password !== this.props.user.password_confirmation) {
    this.props.dispatch({
      type: "EMTPY_NOT_SAME_PASS"
    });
  } else {
    this.props
      .dispatch({
        type: "REQUEST_SIGNUP",
        payload: Backend.signup(this.props.user)
      })
      .then(() => {
        self.props.navigation.navigate("LandingStack");
      });
  }
}

export function hideToast() {
  this.props.dispatch({
    type: "RESET_ERROR_STATE"
  });
}

export function changeValue(value, key) {
  this.props.dispatch({
    type: "SET_USER_VALUE",
    key,
    value
  });
}

export function goOnboarding() {
  this.props.navigation.goBack();
}
