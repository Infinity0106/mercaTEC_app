import * as Backend from "./../../backend";

export function getHistory() {
  this.props.dispatch({
    type: "RESET_GET_HISTORY",
    payload: Backend.getHistory()
  });
}
