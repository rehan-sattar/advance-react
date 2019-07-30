import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "middlewares/async";
import reducers from "reducers";

export default ({ children, initialState = {} }) => (
  <Provider store={createStore(reducers, initialState, applyMiddleware(async))}>
    {children}
  </Provider>
);
