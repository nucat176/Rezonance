import React from 'react';
import TrackItem from './track_item';

class Charts extends React.Component {
  constructor(props){
    super(props);
    this.handleFetchCurrentTrack = this.handleFetchCurrentTrack.bind(this);
    this.handleFetchTrack = this.handleFetchTrack.bind(this);
  }

  handleFetchCurrentTrack(id){
    return e => this.props.fetchCurrentTrack(id);
  }

  handleFetchTrack(id){
    return e => this.props.fetchTrack(id);
  }

  render(){
    return (
      <section className="tracks-section">
        <ul className="tracks-list">
          {this.props.tracks.map(track => (
            <TrackItem
              key={track.id}
              track={track}
              handleCurrentClick={this.handleFetchCurrentTrack(track.id)}
              handleClick={this.handleFetchTrack(track.id)}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default Charts;
