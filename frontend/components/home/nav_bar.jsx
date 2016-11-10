import React from 'react';
import {Link, hashHistory} from 'react-router';
import UploadContainer from './upload_container';

class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleLogout(){
    this.props.logout();
    // hashHistory.push("/");
  }

  handleUpload(){
    hashHistory.push("/home/upload");
  }

  handleProfile(){
    hashHistory.push(`/home/users/${this.props.currentUser.id}`);
  }

  render(){
    return(
      <nav className="home-nav">
        <Link to="/home" className="header-link">
          <img className="logo" src="http://res.cloudinary.com/dfufqfnjx/image/upload/co_rgb:e409f2/v1478808346/radio-waves-hpg-clip-art-at-clker-com-vector-clip-art-online-S1wXRS-clipart_mnvwdh.png"/>
          <h1>Rezonance</h1>
        </Link>
        <span className="option-buttons">
          <UploadContainer/>
          <button className="logout-button" onClick={this.handleProfile}>Profile</button>
          <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
        </span>
      </nav>
    );
  }

}

export default NavBar;
