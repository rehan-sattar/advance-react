import { SAVE_COMMENT } from "actions/types";

export const saveComments = comment => ({
  type: SAVE_COMMENT,
  payload: comment
});
