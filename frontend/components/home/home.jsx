import React from 'react';
import NavBar from './nav_bar';
import DirectoryBar from './directory_bar';

const Home = ({currentUser, logout, tracks, fetchTracks, deleteTrack, createTrack, children}) => (
  <div className="home-page">
    <NavBar currentUser={currentUser} logout={logout}/>
    <DirectoryBar/>
    {children}
  </div>
);

export default Home;
