import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchTracks, deleteTrack, createTrack } from '../../actions/tracks_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  tracks: Object.keys(state.tracks).map(id => state.tracks.id)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchTracks: () => dispatch(fetchTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  createTrack: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
