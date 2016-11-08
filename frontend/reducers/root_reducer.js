import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import TrackReducer from './track_reducer';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from './albums_reducer';
import CurrentTrackReducer from './current_track_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  currentTrack: CurrentTrackReducer,
  track: TrackReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer
});
