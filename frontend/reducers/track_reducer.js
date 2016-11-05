import {merge} from 'lodash';
import {RECEIVE_TRACK} from '../actions/tracks_actions';

const _defaultTrack = {
  title: "",
  track_url: "",
  cover_url: ""
};

export default (state = _defaultTrack, action) => {
  switch(action.type){
    case RECEIVE_TRACK:
      return merge({}, action.track);
    default:
      return state;
  }
};
