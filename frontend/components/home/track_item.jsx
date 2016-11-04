import React from 'react';

const TrackItem = ({track}) => {
  return (
    <li
      className = "track-item">
      <span>{track.id}</span>
      <img src={track.cover_url}/>
      <span>{track.title}</span>
    </li>
  );
};

export default TrackItem;
