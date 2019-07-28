import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
import axios from "axios";

export const saveComments = comment => ({
  type: SAVE_COMMENT,
  payload: comment
});

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};
