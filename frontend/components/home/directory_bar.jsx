import React from 'react';
import {Link} from 'react-router';

const DirectoryBar = () => {
  return (
    <div className="DirectoryBar">
      <Link to="/home" className="charts-link">Charts</Link>
      <Link to="/home/artists" className="charts-link">Artists</Link>
      <Link to="/home/albums" className="charts-link">Albums</Link>
    </div>
  );
};

export default DirectoryBar;
