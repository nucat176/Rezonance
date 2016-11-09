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
      <p className="splash-description">
        Welcome to Rezonance, the world's premier portal for electronic music!
        <br/>
        <br/>
        Here at Rezonance, we pride ourselves on our collection of music as well as our intense
        community of musicians and fans. If you are an artist, we welcome you with open arms and only hope
        you'll share your creations with the rest of the world. If you are a fan, you will not only be listening
        to the hottest tracks - you will be completely immersed in them.
      </p>
    </div>
  </div>
);

const Splash = ({ currentUser, logout }) => (
  sessionLinks()
);

export default Splash;

// <Link to="/login" activeClassName="current">Login</Link>
// <Link to="/signup" activeClassName="current">Sign up!</Link>
