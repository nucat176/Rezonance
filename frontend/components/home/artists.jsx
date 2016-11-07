import React from 'react';
import ArtistItem from './artist_item';

class Artists extends React.Component {
  constructor(props){
    super(props);
    this.handleFetchArtist = this.handleFetchArtist.bind(this);
  }

  handleFetchArtist(id){
    return e => this.props.fetchArtist(id);
  }

  render(){
    return (
      <section className="tracks-section">
        <ul className="tracks-list">
          {this.props.artists.map(artist => (
            <ArtistItem key={artist.id} artist={artist} handleClick={this.handleFetchArtist(artist.id)}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default Artists;
