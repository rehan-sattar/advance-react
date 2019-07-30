import { CHANGE_AUTH } from "actions/types";
import { changeAuth } from "actions";

describe("authentication actions", () => {
  const action = changeAuth(true);
  it("should check the correct action type", () => {
    expect(action.type).toEqual(CHANGE_AUTH);
  });

  it("should check the correct payload", () => {
    expect(action.payload).toEqual(true);
  });
});
