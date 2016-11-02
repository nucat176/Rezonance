import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import AuthFormContainer from '../auth/auth_form_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/" className="header-link">
      <img className="logo" src="http://www.clipartkid.com/images/703/radio-waves-hpg-clip-art-at-clker-com-vector-clip-art-online-S1wXRS-clipart.png"/>
      <h1>Rezonance</h1>
    </Link>
    <AuthFormContainer />
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Splash = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Splash;

// <Link to="/login" activeClassName="current">Login</Link>
// <Link to="/signup" activeClassName="current">Sign up!</Link>
