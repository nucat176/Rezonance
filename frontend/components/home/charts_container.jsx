import { connect } from 'react-redux';
import { fetchTracks, deleteTrack, createTrack, fetchTrack, fetchCurrentTrack } from '../../actions/tracks_actions';
import Charts from './charts';

const mapStateToProps = state => ({
  tracks: Object.keys(state.tracks).map(id => state.tracks[id]),
  track: state.track
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  createTrack: track => dispatch(createTrack(track)),
  fetchTrack: id => dispatch(fetchTrack(id)),
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
