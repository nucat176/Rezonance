import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import AuthFormContainer from '../auth/auth_form_container';

const sessionLinks = () => (
  <div className="splash-div">
    <div className="splash-overlay">
      <nav className="login-signup">
        <Link to="/" className="header-link">
          <img className="logo" src="http://www.clipartkid.com/images/703/radio-waves-hpg-clip-art-at-clker-com-vector-clip-art-online-S1wXRS-clipart.png"/>
          <h1>Rezonance</h1>
        </Link>
        <AuthFormContainer />
      </nav>
      <header className="splash-header">Immerse Yourself</header>
    </div>
    <img className="splash-img" src="https://static.events.ch/img/media/Concert.jpg"/>
  </div>
);

const Splash = ({ currentUser, logout }) => (
  sessionLinks()
);

export default Splash;

// <Link to="/login" activeClassName="current">Login</Link>
// <Link to="/signup" activeClassName="current">Sign up!</Link>
