import {connect} from 'react-redux';
import {fetchTrack, deleteTrack, fetchCurrentTrack} from '../../actions/tracks_actions';
import Track from './track';

const mapStateToProps = state => ({
  track: state.track,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id)),
  deleteTrack: id => dispatch(deleteTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
