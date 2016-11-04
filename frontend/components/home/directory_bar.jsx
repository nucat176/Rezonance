import React from 'react';
import {Link} from 'react-router';

const DirectoryBar = () => {
  return (
    <div className="DirectoryBar">
      <Link to="/home" className="charts-link">Charts</Link>
    </div>
  );
};

export default DirectoryBar;
