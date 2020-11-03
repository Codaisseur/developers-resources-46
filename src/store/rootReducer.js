import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";
import resourcesReducer from "./resources/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  developers: developersReducer,
  resources: resourcesReducer,
  user: userReducer,
});
