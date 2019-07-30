import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends React.Component {
  renderButton = () =>
    this.props.auth ? (
      <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    ) : (
      <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
    );
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(
  mapStateToProps,
  actions
)(App);
