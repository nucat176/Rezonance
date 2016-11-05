import React from 'react';
import TrackItem from './track_item';

class Charts extends React.Component {
  constructor(props){
    super(props);
    this.handleFetchTrack = this.handleFetchTrack.bind(this);
  }

  handleFetchTrack(id){
    return e => this.props.fetchTrack(id);
  }

  render(){
    return (
      <section className="tracks-section">
        <ul className="tracks-list">
          {this.props.tracks.map(track => (
            <TrackItem key={track.id} track={track} handleClick={this.handleFetchTrack(track.id)}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default Charts;
