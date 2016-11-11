import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/user_actions';

export default (state = {tracks: [], comments: []}, action) => {
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, action.user);
    default:
      return state;
  }
};
