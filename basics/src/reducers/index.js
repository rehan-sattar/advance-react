import { combineReducers } from "redux";
import commentReducer from "reducers/comments";

const reducers = combineReducers({ commentReducer });
export default reducers;
