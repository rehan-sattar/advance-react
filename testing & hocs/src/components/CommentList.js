import React, { Component } from "react";
import { connect } from "react-redux";

export class CommentList extends Component {
  renderComments = () => {
    const { comments } = this.props;
    return comments.map((comment, index) => <li key={index}>{comment}</li>);
  };
  render() {
    return (
      <div>
        <h1>Comment List: </h1>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});
export default connect(mapStateToProps)(CommentList);
