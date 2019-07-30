import { combineReducers } from "redux";
import commentReducer from "reducers/comments";
import authReducer from "reducers/auth";

const reducers = combineReducers({
  comments: commentReducer,
  auth: authReducer
});
export default reducers;
