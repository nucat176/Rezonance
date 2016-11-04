import React from 'react';
import NavBar from './nav_bar';
import DirectoryBar from './directory_bar';

const Home = ({currentUser, logout, tracks, fetchTracks, deleteTrack, createTrack, children}) => (
  <div className="home-page">
    <div className="home-overlay">
      <NavBar currentUser={currentUser} logout={logout}/>
      <DirectoryBar/>
      {children}
    </div>
    <img className="splash-img" src="https://static.events.ch/img/media/Concert.jpg"/>
  </div>
);

export default Home;
