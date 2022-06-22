import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  clients: clientsReducer,
  login: loginReducer,
});

export default rootReducer;
