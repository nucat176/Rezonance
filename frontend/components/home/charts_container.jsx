import { connect } from 'react-redux';
import { fetchTracks, deleteTrack, createTrack } from '../../actions/tracks_actions';
import Charts from './charts';

const mapStateToProps = state => ({
  tracks: Object.keys(state.tracks).map(id => state.tracks[id])
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  createTrack: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
