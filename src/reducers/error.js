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
    case "REQUEST_LOGOUT":
      newState.loading = true;
      break;
    case "REQUEST_LOGOUT_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_LOGOUT_REJECTED":
      newState.loading = false;
      newState.text = "Error logging out";
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
    case "REQUEST_SHOPPING_BAG":
      newState.loading = true;
      break;
    case "REQUEST_SHOPPING_BAG_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_SHOPPING_BAG_REJECTED":
      newState.loading = false;
      newState.text = "Error getting shoppingbag";
      newState.styles = ToastStyles.error;
      break;
    case "REQUEST_DELETE_ITEM_SHOPPINGBAG":
      newState.loading = true;
      break;
    case "REQUEST_DELETE_ITEM_SHOPPINGBAG_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_DELETE_ITEM_SHOPPINGBAG_REJECTED":
      newState.loading = false;
      newState.text = "Error deleting product";
      newState.styles = ToastStyles.error;
      break;
    case "REQUEST_DELETE_SHOPPINGBAG":
      newState.loading = true;
      break;
    case "REQUEST_DELETE_SHOPPINGBAG_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_DELETE_SHOPPINGBAG_REJECTED":
      newState.loading = false;
      newState.text = "Error checking shopping bag";
      newState.styles = ToastStyles.error;
      break;
    case "REQUEST_SIGNUP":
      newState.loading = true;
      break;
    case "REQUEST_SIGNUP_FULFILLED":
      newState.loading = false;
      break;
    case "REQUEST_SIGNUP_REJECTED":
      newState.loading = false;
      newState.text = "Error signing up";
      newState.styles = ToastStyles.error;
      break;
    case "RESET_GET_HISTORY":
      newState.loading = true;
      break;
    case "RESET_GET_HISTORY_FULFILLED":
      newState.loading = false;
      break;
    case "RESET_GET_HISTORY_REJECTED":
      newState.loading = false;
      newState.text = "Error getting history";
      newState.styles = ToastStyles.error;
      break;
    case "RESET_ERROR_STATE":
      newState.text = "";
      newState.styles = "";
      break;
  }
  return newState;
};
