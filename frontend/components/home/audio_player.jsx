import React from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentTrack: this.props.currentTrack, playing: this.props.playing, progress: 0};
    this.togglePlay = this.togglePlay.bind(this);
    this.renderPlayer = this.renderPlayer.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.appear = this.appear.bind(this);
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
          hidden={true}
          onProgress={this.updatePlaybar}/>
      );
    } else {
      return (<span></span>);
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({currentTrack: nextProps.currentTrack});
    this.setState({playing: nextProps.playing});
  }

  updatePlaybar({played}){
    this.setState({progress: played * 100});
  }

  appear(){
    if(this.state.currentTrack.title !== ""){
      return (
        {opacity: 1}
      );
    } else {
      return (
        {opacity: 0}
      );
    }
  }

  renderPlayPause(){
    if(this.state.playing === false){
      return (
        <img onClick={this.togglePlay} src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1478652666/play-butotn_mhktbx.png" className="play-button"/>
      );
    } else {
      return (
        <img onClick={this.togglePlay} src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1478720439/radio-pause-button_kgpn8r.jpg" className="pause-button"/>
      );
    }
  }

  render(){
    return (
      <div className="audio-player" style={this.appear()}>
        <span className="audio-buttons">
          {this.renderPlayPause()}
          <img src={this.props.currentTrack.cover_url} className="playback-cover"/>
          <h1 className="player-song-title">{this.props.currentTrack.title}</h1>
        </span>
        <div className='progress-bar'>
          <div className='audio-progress'
            style={{width: `${this.state.progress}%`}}>
          </div>
          <div className='progress-circle'
            style={{left: `${this.state.progress - 8}px`}}>
          </div>
        </div>
        {this.renderPlayer()}
      </div>
    );
  }
}

export default AudioPlayer;
