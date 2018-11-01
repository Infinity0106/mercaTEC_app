import * as Backend from "./../../backend";

export function goCheckout() {
  this.props.dispatch({
    type: "REQUEST_DELETE_SHOPPINGBAG",
    payload: Backend.remove_shopping_bag(this.props.shopping_bag.id)
  });
}

export function getShoppingBag() {
  this.props.dispatch({
    type: "REQUEST_SHOPPING_BAG",
    payload: Backend.shopping_bag()
  });
}

export function deleteItem(id) {
  let self = this;
  this.props
    .dispatch({
      type: "REQUEST_DELETE_ITEM_SHOPPINGBAG",
      payload: Backend.remove_item_shopping_bag(this.props.shopping_bag.id, id)
    })
    .then(() => {
      self.props.dispatch({
        type: "REQUEST_SHOPPING_BAG",
        payload: Backend.shopping_bag()
      });
    });
}
