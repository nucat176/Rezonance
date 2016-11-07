import React from 'react';
import AlbumItem from './album_item';

class Albums extends React.Component {
  constructor(props){
    super(props);
    this.handleFetchAlbum = this.handleFetchAlbum.bind(this);
  }

  handleFetchAlbum(id){
    return e => this.props.fetchAlbum(id);
  }

  render(){
    return (
      <section className="tracks-section">
        <ul className="tracks-list">
          {this.props.albums.map(album => (
            <AlbumItem key={album.id} album={album} handleClick={this.handleFetchAlbum(album.id)}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default Albums;
