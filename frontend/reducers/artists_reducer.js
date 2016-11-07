import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST,
  REMOVE_ARTIST
} from '../actions/artist_actions';

import merge from 'lodash/merge';

const ArtistsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_ARTISTS:
      return merge({}, action.artists);
    case RECEIVE_ARTIST:
      return merge({}, oldState, {[action.artist.id]: action.artist});
    case REMOVE_ARTIST:
      let newState = merge({}, oldState);
      delete newState[action.artist.id];
      return newState;
    default:
      return oldState;
  }
};

export default ArtistsReducer;
