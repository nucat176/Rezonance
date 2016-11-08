import {
  receiveTracks,
  receiveTrack,
  removeTrack,
  receiveCurrentTrack,
  FETCH_TRACKS,
  FETCH_TRACK,
  FETCH_CURRENT_TRACK,
  CREATE_TRACK,
  UPDATE_TRACK,
  DELETE_TRACK
} from '../actions/tracks_actions';

import {
  fetchTracks,
  fetchTrack,
  createTrack,
  updateTrack,
  deleteTrack
} from '../util/tracks_api_util';

const TracksMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveTracksSuccess = tracks => dispatch(receiveTracks(tracks));
  let receiveTrackSuccess = track => dispatch(receiveTrack(track));
  let removeTrackSuccess = track => dispatch(removeTrack(track));
  let receiveCurrentTrackSuccess = track => dispatch(receiveCurrentTrack(track));
  switch(action.type){
    case FETCH_TRACKS:
      fetchTracks(receiveTracksSuccess, error);
      return next(action);
    case FETCH_TRACK:
      fetchTrack(action.id, receiveTrackSuccess, error);
      return next(action);
    case FETCH_CURRENT_TRACK:
      fetchTrack(action.id, receiveCurrentTrackSuccess, error);
      return next(action);
    case CREATE_TRACK:
      createTrack(action.track, receiveTrackSuccess, error);
      return next(action);
    case UPDATE_TRACK:
      updateTrack(action.track, receiveTrackSuccess, error);
      return next(action);
    case DELETE_TRACK:
      deleteTrack(action.id, removeTrackSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TracksMiddleware;
