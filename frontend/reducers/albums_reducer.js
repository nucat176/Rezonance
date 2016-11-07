import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM
} from '../actions/albums_actions';

import merge from 'lodash/merge';

const AlbumsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, oldState, {[action.album.id]: action.album});
    case REMOVE_ALBUM:
      let newState = merge({}, oldState);
      delete newState[action.album.id];
      return newState;
    default:
      return oldState;
  }
};

export default AlbumsReducer;
