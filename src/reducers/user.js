export default (
  state = {
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    token: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_USER_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
