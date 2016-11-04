import React from 'react';

const TrackItem = ({track}) => {
  return (
    <li
      className = "track-item">
      <span>{track.id}: {track.title}</span>
      <img className="cover-img" src={track.cover_url}/>
    </li>
  );
};

export default TrackItem;
