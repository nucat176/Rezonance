import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment});
    // case REMOVE_COMMENT:
    //   let newState = merge({}, oldState);
    //   delete newState[action.comment.id];
    //   return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
