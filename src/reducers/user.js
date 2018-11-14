export default (
  state = {
    email: "berny.orozco@hotmail1.com",
    username: "username",
    password: "1234567890",
    password_confirmation: "1234567890",
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
