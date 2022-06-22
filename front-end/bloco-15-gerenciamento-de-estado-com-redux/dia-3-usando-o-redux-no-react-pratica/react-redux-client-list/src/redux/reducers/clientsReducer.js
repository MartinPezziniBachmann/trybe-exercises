import { ADD_CLIENTS, REMOVE_CLIENT } from "../actions";

const INITIAL_STATE = {
  clients: [],
};

const clientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLIENTS:
      return {
        ...state,
        clients: [
          ...state.clients,
          {
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
          },
        ],
      };
    case REMOVE_CLIENT:
      const remClients = state.clients.reduce(
        (acc, client) =>
          client.name === action.payload.name ? acc : [...acc, client],
        []
      );
      console.log(action);
      return {
        ...state,
        clients: remClients,
      };
    default:
      return state;
  }
};

export default clientsReducer;
