import { ToastStyles } from "react-native-toaster";
import Success from "./../components/Success";
import Error from "./../components/Error";

export default (
  state = {
    loading: false,
    text: "",
    styles: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "EMTPY_EMAIL_PASS":
      newState.text = "Empty email or password";
      newState.styles = ToastStyles.error;
      break;
    case "REQUEST_LOGIN":
      newState.loading = true;
      break;
    case "REQUEST_LOGIN_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_LOGIN_REJECTED":
      newState.loading = false;
      newState.text = "Error at login";
      newState.styles = ToastStyles.error;
      break;
    case "REQUEST_PRODUCT":
      newState.loading = true;
      break;
    case "REQUEST_PRODUCT_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_PRODUCT_REJECTED":
      newState.loading = false;
      newState.text = "Error getting product";
      newState.styles = ToastStyles.error;
      break;
    case "REQUES_ADD_CART":
      newState.loading = true;
      break;
    case "REQUES_ADD_CART_FULFILLED":
      newState.loading = false;
      break;
    case "REQUES_ADD_CART_REJECTED":
      newState.loading = false;
      newState.text = "Error adding product to your cart";
      newState.styles = ToastStyles.error;
      break;
    case "RESET_ERROR_STATE":
      newState.text = "";
      newState.styles = "";
      break;
  }
  return newState;
};
