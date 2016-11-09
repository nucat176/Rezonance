import React from 'react';
import {hashHistory} from 'react-router';
import UpdateTrackContainer from './update_track_container';
import TrackItem from './track_item';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteTrack(this.props.track.id);
    hashHistory.push("/home");
  }

  handleFetchCurrentTrack(id){
    return (
      e => {
        this.props.fetchCurrentTrack(id);
        this.props.receivePlaying(true);
      }
    );
  }

  render(){
    return (
      <div className="track-page">
        <TrackItem
          key={this.props.track.id}
          track={this.props.track}
          handleCurrentClick={this.handleFetchCurrentTrack(this.props.track.id)}
          />
        <button onClick={this.handleDelete} className="delete-button">Delete</button>
        <UpdateTrackContainer/>
      </div>
    );
  }
}

export default Track;
