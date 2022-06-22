import { LOGIN } from "../actions";

const INITIAL_STATE = {
  email: "",
  password: "",
  logged: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        logged: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
