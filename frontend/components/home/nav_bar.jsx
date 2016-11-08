import React from 'react';
import {Link, hashHistory} from 'react-router';
import UploadContainer from './upload_container';

class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleLogout(){
    this.props.logout();
    // hashHistory.push("/");
  }

  handleUpload(){
    hashHistory.push("/home/upload");
  }

  render(){
    return(
      <nav className="home-nav">
        <Link to="/" className="header-link">
          <img className="logo" src="http://www.clipartkid.com/images/703/radio-waves-hpg-clip-art-at-clker-com-vector-clip-art-online-S1wXRS-clipart.png"/>
          <h1>Rezonance</h1>
        </Link>
        <UploadContainer/>
        <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
      </nav>
    );
  }

}

export default NavBar;
