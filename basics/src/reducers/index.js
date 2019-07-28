import { combineReducers } from "redux";
import commentReducer from "reducers/comments";

const reducers = combineReducers({ comments: commentReducer });
export default reducers;
