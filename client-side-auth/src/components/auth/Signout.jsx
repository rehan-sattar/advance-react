import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends React.Component {
  componentDidMount() {
    const { signout } = this.props;
    signout();
  }

  render() {
    return (
      <div>
        <h3>Sad to see you go.. </h3>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(Signout);
