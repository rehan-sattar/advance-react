import React from "react";

class CommentBox extends React.Component {
  state = { comment: "" };
  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // TODO -
    //  call the action creator.
    this.setState({
      comment: ""
    });
  };
  render() {
    return (
      <div>
        <h1>Enter your comments: </h1>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button type="submit">Comment!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
