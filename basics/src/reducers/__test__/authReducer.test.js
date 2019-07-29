import { CHANGE_AUTH } from "actions/types";
import authReducer from "reducers/auth";

describe("auth reducer", () => {
  it("should handles the action of CHANGE_AUTH", () => {
    const fakeAction = {
      type: CHANGE_AUTH,
      payload: true
    };
    const state = authReducer(false, fakeAction);
    expect(state).toBe(true);
  });
  it("should handles the unknown type of action", () => {
    const fakeAction = {};
    const state = authReducer(false, fakeAction);
    expect(state).toBe(false);
  });

  it("should set false to state by default", () => {
    const state = authReducer(undefined, {});
    expect(state).toBe(false);
  });
});
