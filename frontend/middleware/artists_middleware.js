import {
  receiveArtists,
  receiveArtist,
  removeArtist,
  FETCH_ARTISTS,
  FETCH_ARTIST,
  CREATE_ARTIST,
  UPDATE_ARTIST,
  DELETE_ARTIST
} from '../actions/artist_actions';

import {
  fetchArtists,
  fetchArtist,
  createArtist,
  updateArtist,
  deleteArtist
} from '../util/artists_api_util';

const ArtistsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveArtistsSuccess = artists => dispatch(receiveArtists(artists));
  let receiveArtistSuccess = artist => dispatch(receiveArtist(artist));
  let removeArtistSuccess = artist => dispatch(removeArtist(artist));
  switch(action.type){
    case FETCH_ARTISTS:
      fetchArtists(receiveArtistsSuccess, error);
      return next(action);
    case FETCH_ARTIST:
      fetchArtist(action.id, receiveArtistSuccess, error);
      return next(action);
    case CREATE_ARTIST:
      createArtist(action.artist, receiveArtistSuccess, error);
      return next(action);
    case UPDATE_ARTIST:
      updateArtist(action.artist, receiveArtistSuccess, error);
      return next(action);
    case DELETE_ARTIST:
      deleteArtist(action.id, removeArtistSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ArtistsMiddleware;
