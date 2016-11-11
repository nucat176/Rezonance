import {merge} from 'lodash';
import {RECEIVE_TRACK} from '../actions/tracks_actions';
import {
  receiveComments,
  removeComment,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const _defaultTrack = {
  title: "",
  track_url: "",
  cover_url: "",
  comments: [],
  user: {username: ""}
};

export default (state = _defaultTrack, action) => {
  switch(action.type){
    case RECEIVE_TRACK:
      return merge({}, action.track);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      newState.comments.forEach((comment, index) => {
        if(comment.id === action.comment.id){
          return newState.comments.splice(index, 1);
        }
      });
      return newState;
    default:
      return state;
  }
};
