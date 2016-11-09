import React from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentTrack: this.props.currentTrack, playing: this.props.playing};
    this.togglePlay = this.togglePlay.bind(this);
    this.renderPlayer = this.renderPlayer.bind(this);
  }

  togglePlay(){
    if(this.props.playing === true){
      this.props.receivePlaying(false);
      this.setState({playing: false});
    } else {
      this.props.receivePlaying(true);
      this.setState({playing: true});
    }
  }

  renderPlayer(){
    if (this.props.currentTrack){
      return (
        <ReactPlayer
          url={this.props.currentTrack.track_url}
          playing={this.props.playing}
          hidden={true}/>
      );
    } else {
      return (<span></span>);
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({currentTrack: nextProps.currentTrack});
    this.setState({playing: nextProps.playing});
  }

  render(){
    return (
      <div className="audio-player">
        <span className="audio-buttons">
          <img onClick={this.togglePlay} src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1478652666/play-butotn_mhktbx.png" className="play-button"/>
          <img src={this.props.currentTrack.cover_url} className="playback-cover"/>
          <h1 className="player-song-title">{this.props.currentTrack.title}</h1>
        </span>
        {this.renderPlayer()}
      </div>
    );
  }
}

export default AudioPlayer;
