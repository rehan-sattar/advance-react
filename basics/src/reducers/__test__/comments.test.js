import commentReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles action for SAVE_COMMENT type", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["new comment"]);
});

it("should handle actions with unknown types", () => {
  // passing empty object. No type. or we can also do this : {type: "someRandomeString"}
  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});
