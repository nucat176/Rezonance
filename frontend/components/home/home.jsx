import React from 'react';
import NavBar from './nav_bar';
import DirectoryBar from './directory_bar';
import ReactPlayer from 'react-player';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="home-page">
        <div className="home-overlay">
          <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
          <DirectoryBar/>
          {this.props.children}
        </div>
        <img className="splash-img" src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1478371800/Concert_hledmj.jpg"/>
        <ReactPlayer url={this.props.currentTrack.track_url} playing={true}/>
      </div>
    );
  }

}

export default Home;
