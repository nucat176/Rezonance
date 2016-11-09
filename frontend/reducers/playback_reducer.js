import {merge} from 'lodash';
import {RECEIVE_PLAYING} from '../actions/tracks_actions';

const _defaultPlayingState = {
  playing: true
};

export default (state = _defaultPlayingState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_PLAYING:
      newState.playing = action.playing;
      return newState;
    default:
      return state;
  }
};
