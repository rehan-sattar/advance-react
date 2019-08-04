import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './headerStyles.css';

class Header extends React.Component {
  renderLinks = () => {
    const { authenticated } = this.props;
    if (authenticated) {
      return (
        <div>
          <Link to="/signout">Signout</Link>
          <Link to="/features">Feature</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
    );
  };

  render() {
    return (
      <div className="header">
        <Link to="/">Home</Link>
        {this.renderLinks()}
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(Header);
