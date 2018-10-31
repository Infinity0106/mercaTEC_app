export default (
  state = {
    id: "",
    name: "",
    description: "",
    images: [],
    price: 0
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_PRODUCT_FULFILLED":
      newState.name = action.payload.data.name;
      newState.price = action.payload.data.price;
      newState.description = action.payload.data.description;
      newState.images = action.payload.data.images;
    case "SET_PRODUCT_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
