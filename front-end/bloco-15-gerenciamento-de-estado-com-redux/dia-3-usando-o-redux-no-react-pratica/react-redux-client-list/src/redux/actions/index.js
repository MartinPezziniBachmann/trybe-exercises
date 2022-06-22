export const LOGIN = "LOGIN";

export const ADD_CLIENTS = "ADD_CLIENTS";

export const REMOVE_CLIENT = "REMOVE_CLIENT";

export const loginAction = ({ email, password }) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const addClientAction = ({ name, age, email }) => ({
  type: ADD_CLIENTS,
  payload: {
    name,
    age,
    email,
  },
});

export const removeClientAction = (name) => ({
  type: REMOVE_CLIENT,
  payload: {
    name: name,
  },
});
