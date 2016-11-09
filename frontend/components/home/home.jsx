import React from 'react';
import NavBar from './nav_bar';
import DirectoryBar from './directory_bar';
import ReactPlayer from 'react-player';
import AudioPlayerContainer from './audio_player_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="splash-div">
        <div className="home-overlay">
          <div className="home">
            <div className="not-audio-player">
              <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
              <DirectoryBar/>
              {this.props.children}
            </div>
            <div className="audio-player-container">
              <AudioPlayerContainer/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
