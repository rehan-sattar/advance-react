import { SAVE_COMMENT } from "actions/types";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    default:
      return state;
  }
};
