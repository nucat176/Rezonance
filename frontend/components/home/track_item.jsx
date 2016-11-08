import React from 'react';
import {Link} from 'react-router';

const TrackItem = ({track, handleClick, handleCurrentClick}) => {
  return (
    <li
      className = "track-item">
      <Link
        to={`/home/tracks/${track.id}`}
        onClick={handleClick}
        className="track-link">
        {track.id}: {track.title}
      </Link>
      <div className="brightness">
        <img className="cover-img" src={track.cover_url} onClick={handleCurrentClick}/>
      </div>
    </li>
  );
};

export default TrackItem;
