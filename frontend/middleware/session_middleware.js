import {LOGIN, LOGOUT, SIGNUP} from '../actions/session_actions';
import {receiveCurrentUser, receiveErrors} from '../actions/session_actions';
import {login, signup, logout} from '../util/session_api_util';
import {hashHistory} from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = e => dispatch(receiveErrors(e.responseJSON));

  switch(action.type){
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      const logoutSuccess = () => {
        hashHistory.push("/");
        next(action);
      };
      logout(() => logoutSuccess());
      break;
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};
