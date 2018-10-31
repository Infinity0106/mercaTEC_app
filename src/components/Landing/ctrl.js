export function detectQR(e) {
  this.props.dispatch({
    type: "SET_PRODUCT_VALUE",
    key: "id",
    value: e.data
  });
  this.props.dispatch({
    type: "SET_SCANNER_ACTIVE_STATUS",
    value: false
  });
  this.props.navigation.navigate("Buy");
}
