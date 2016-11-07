import React from 'react';

const AlbumItem = ({album, handleClick}) => {
  return (
    <li
      className = "track-item">
      <span>{album.id}: {album.title}</span>
      <div className="brightness">
        <img className="cover-img" src={album.cover_url} onClick={handleClick}/>
      </div>
    </li>
  );
};

export default AlbumItem;
