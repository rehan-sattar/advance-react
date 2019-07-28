import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

describe("tests for CommentList", () => {
  const initialState = {
    comments: ["comment 1", "comment 2"]
  };
  const wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
  it("should render the component", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });
  it("should render LI for every comment", () => {
    expect(wrapper.find("li").length).toEqual(initialState.comments.length);
  });
  it("should containt the actual entered text in list", () => {
    expect(wrapper.render().text()).toContain(initialState.comments[0]);
    expect(wrapper.render().text()).toContain(initialState.comments[1]);
  });
});
