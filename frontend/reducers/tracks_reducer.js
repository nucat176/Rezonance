import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/tracks_actions';

import merge from 'lodash/merge';

const TracksReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_TRACK:
      return merge({}, oldState, {[action.track.id]: action.track});
    case REMOVE_TRACK:
      let newState = merge({}, oldState);
      delete newState[action.track.id];
      return newState;
    default:
      return oldState;
  }
};

export default TracksReducer;
