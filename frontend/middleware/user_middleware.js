import {
  FETCH_USER,
  receiveUser
} from '../actions/user_actions';

import {
  fetchUser
} from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  let receiveUserSuccess = user => dispatch(receiveUser(user));
  let error = e => console.log(e.responseJSON);

  switch(action.type){
    case FETCH_USER:
      fetchUser(action.id, receiveUserSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
