import * as Backend from "./../../backend";

export function getProduct() {
  this.props.dispatch({
    type: "REQUEST_PRODUCT",
    payload: Backend.product(this.props.product.id)
  });
}

export function addToCart() {
  let self = this;
  this.props
    .dispatch({
      type: "REQUES_ADD_CART",
      payload: Backend.add_shopping_bag(this.props.product.id)
    })
    .then(() => {
      self.props.navigation.navigate("Landing");
    });
}
