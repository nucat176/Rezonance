import React from 'react';

const ArtistItem = ({artist, handleClick}) => {
  return (
    <li
      className = "track-item">
      <span>{artist.id}: {artist.name}</span>
      <div className="brightness">
        <img className="cover-img" src={artist.artist_img_url} onClick={handleClick}/>
      </div>
    </li>
  );
};

export default ArtistItem;
