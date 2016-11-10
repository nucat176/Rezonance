import React from 'react';
import TrackItem from './track_item';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.handleFetchCurrentTrack = this.handleFetchCurrentTrack.bind(this);
    this.handleFetchTrack = this.handleFetchTrack.bind(this);
  }

  handleFetchCurrentTrack(id){
    return (
      e => {
        this.props.fetchCurrentTrack(id);
        this.props.receivePlaying(true);
      }
    );
  }

  handleFetchTrack(id){
    return e => this.props.fetchTrack(id);
  }

  render(){
    return (
      <div className="profile-page">
        <h1 className="profile-header">{this.props.currentUser.username}</h1>
          <section className="uploads-section">
            <h1 className="uploaded-tracks-title">Uploaded Tracks</h1>
            <ul className="uploads-list">
              {this.props.currentUser.tracks.map(track => (
                <TrackItem
                  key={track.id}
                  track={track}
                  handleCurrentClick={this.handleFetchCurrentTrack(track.id)}
                  handleClick={this.handleFetchTrack(track.id)}/>
              ))}
            </ul>
          </section>
      </div>
    );
  }
}

export default Profile;
