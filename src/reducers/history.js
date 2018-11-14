export default (
  state = {
    items: []
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "RESET_GET_HISTORY_FULFILLED":
      newState.items = action.payload.data;
      break;
  }
  return newState;
};
