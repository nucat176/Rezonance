import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import TrackReducer from './track_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  track: TrackReducer
});
