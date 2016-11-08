import React from 'react';

class Track extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="track-page">
        <span>{this.props.track.title}</span>
        <img src={this.props.track.cover_url} className="cover-img"/>
      </div>
    );
  }
}

export default Track;
