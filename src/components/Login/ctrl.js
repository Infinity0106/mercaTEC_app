import * as Backend from "./../../backend";

export function changeValue(value, key) {
  this.props.dispatch({
    type: "SET_USER_VALUE",
    key,
    value
  });
}

export function goLanding() {
  let self = this;
  if (!this.props.user.email || !this.props.user.password) {
    this.props.dispatch({
      type: "EMTPY_EMAIL_PASS"
    });
  } else {
    this.props
      .dispatch({
        type: "REQUEST_LOGIN",
        payload: Backend.login(this.props.user.email, this.props.user.password)
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
