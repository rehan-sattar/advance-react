import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";

describe("App Component Tests", () => {
  const wrappedComponent = shallow(<App />);
  it("shows render 2 routes", () => {
    expect(wrappedComponent.find(Route).length).toEqual(2);
  });
  // TODO:
  /*
     1 - how to test React Router.
     2 - Testing blogs,
     3 - Props and State testing in React.
  */
  it("should render comment list route", () => {});
  it("should render comment box route", () => {});
});
