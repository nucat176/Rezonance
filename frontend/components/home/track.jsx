import React from 'react';
import {hashHistory} from 'react-router';
import UpdateTrackContainer from './update_track_container';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteTrack(this.props.track.id);
    hashHistory.push("/home");
  }

  render(){
    return (
      <div className="track-page">
        <span className="track-title">{this.props.track.title}</span>
        <img src={this.props.track.cover_url} className="cover-img"/>
        <button onClick={this.handleDelete} className="delete-button">Delete</button>
        <UpdateTrackContainer/>
      </div>
    );
  }
}

export default Track;
