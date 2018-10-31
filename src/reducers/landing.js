export default (
  state = {
    status: false
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_SCANNER_ACTIVE_STATUS":
      newState.status = action.value;
      break;
  }
  return newState;
};
