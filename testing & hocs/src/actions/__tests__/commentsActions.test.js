import { saveComments } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("save comment", () => {
  it("has the correct type", () => {
    const action = saveComments();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("has the correct payload", () => {
    const action = saveComments("mock comment");
    expect(action.payload).toEqual("mock comment");
  });
});
