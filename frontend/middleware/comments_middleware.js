import {
  receiveComments,
  removeComment,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions';

import {
  receiveTrack,
  removeTrack
} from '../actions/tracks_actions';

import {
  createComment,
  updateComment,
  deleteComment
} from '../util/comments_api_util';

const CommentsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveCommentsSuccess = comments => dispatch(receiveComments(comments));
  let receiveCommentSuccess = track => dispatch(receiveTrack(track));
  let removeCommentSuccess = comment => dispatch(removeComment(comment));
  switch(action.type){
    case CREATE_COMMENT:
      createComment(action.comment, receiveCommentSuccess, error);
      return next(action);
    case UPDATE_COMMENT:
      updateComment(action.comment, receiveCommentSuccess, error);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, removeCommentSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
