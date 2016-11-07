import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';
import ChartsContainer from './home/charts_container';
import ArtistsContainer from './home/artists_container';
import AlbumsContainer from './home/albums_container';
import {fetchTracks} from '../actions/tracks_actions';
import {fetchArtists} from '../actions/artist_actions';
import {fetchAlbums} from '../actions/album_actions';


const Root = ({store}) => {

  const _redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/");
    }
  };

  const _fetchTracks = () => {
    store.dispatch(fetchTracks());
  };

  const _fetchArtists = () => {
    store.dispatch(fetchArtists());
  };

  const _fetchAlbums = () => {
    store.dispatch(fetchAlbums());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path="home" component={HomeContainer} onEnter={_redirectIfLoggedOut}>
            <IndexRoute component={ChartsContainer} onEnter={_fetchTracks}/>
            <Route path="artists" component={ArtistsContainer} onEnter={_fetchArtists}/>
            <Route path="albums" component={AlbumsContainer} onEnter={_fetchAlbums}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
