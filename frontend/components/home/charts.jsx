import React from 'react';
import TrackItem from './track_item';

const Charts = ({tracks}) => {
  return (
    <section className="tracks-section">
      <ul>
        {tracks.map(track => (
          <TrackItem key={track.id} track={track} />
        ))}
      </ul>
    </section>
  );
};

export default Charts;
