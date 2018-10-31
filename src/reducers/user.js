export default (
  state = {
    email: "berny.orozco@hotmail.com",
    username: "",
    password: "1234567890",
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
