export default (
  state = {
    id: "",
    items: [],
    total: 0
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_SHOPPING_BAG_FULFILLED":
      newState.id = action.payload.data.id;
      newState.items = action.payload.data.items;
      newState.total = action.payload.data.total;
      break;
    case "REQUEST_DELETE_SHOPPINGBAG_FULFILLED":
      newState.items = [];
      newState.total = 0.0;
      break;
  }
  return newState;
};
