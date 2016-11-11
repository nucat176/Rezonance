import React from 'react';

const AlbumItem = ({album, handleClick}) => {
  return (
    <li
      className = "track-item">
      <h1 className="track-index-title">{album.title}</h1>
      <img className="cover-img" src={album.cover_url} onClick={handleClick}/>
    </li>
  );
};

export default AlbumItem;
