import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

/**
 * POINTS TO REMEMBER HERE:
 * 1. Whenever, this.setState() is called, it do not rerender the component immedietly
 * instead, it rerender it asynchronously. Which means react will rerender it after some time or
 * when it feels. This rerender is queu down deeply into react.
 * 2. We have to forcefully update the component here because we need to make sure that the assertion
 * is done after the rerendering.
 * 3. update() method of enzyme to the rescue!
 */

describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "some mock value"
      }
    });
    wrapped.update();
  });

  it("has a textarea in which user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("some mock value");
  });

  it("should empty textarea after form submission", () => {
    /**
     * IMPORTANT NOTE:
     * 1. we need to simulate an event on form that is submit
     */
    wrapped.find("form").simulate("submit");
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
