import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/signin">Signin</Link>
    <Link to="/signout">Signout</Link>
    <Link to="/features">Feature</Link>
  </div>
);

export default Header;
