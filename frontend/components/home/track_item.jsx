import React from 'react';

const TrackItem = ({track, handleClick}) => {
  return (
    <li
      className = "track-item">
      <span>{track.id}: {track.title}</span>
      <div className="brightness">
        <img className="cover-img" src={track.cover_url} onClick={handleClick}/>
      </div>
    </li>
  );
};

export default TrackItem;
