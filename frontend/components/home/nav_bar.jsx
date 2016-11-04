import React from 'react';
import {Link, hashHistory} from 'react-router';

class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleLogout(){
    this.props.logout();
    // hashHistory.push("/");
  }

  handleHome(){
    hashHistory.push("/home");
  }

  render(){
    return(
      <nav className="home-nav">
        <Link to="/" className="header-link">
          <img className="logo" src="http://www.clipartkid.com/images/703/radio-waves-hpg-clip-art-at-clker-com-vector-clip-art-online-S1wXRS-clipart.png"/>
          <h1>Rezonance</h1>
        </Link>
        <button className="home-button" onClick={this.handleHome}>Home</button>
        <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
      </nav>
    );
  }

}

export default NavBar;
