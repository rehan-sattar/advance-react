import React from "react";
import { mount } from "enzyme";
import axios from "axios";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Comment 1" }, { name: "Comment 2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch lists of comments and display them", done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find(".fetch-comments").simulate("click");
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    wrapped.unmount();
    done();
  });
});
