import React from 'react';

const ArtistItem = ({artist, handleClick}) => {
  return (
    <li
      className = "track-item">
      <h1 className="track-index-title">{artist.name}</h1>
      <img className="cover-img" src={artist.artist_img_url} onClick={handleClick}/>
    </li>
  );
};

export default ArtistItem;
