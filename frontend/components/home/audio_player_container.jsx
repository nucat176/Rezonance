import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/tracks_actions';
import ReactAudioPlayer from 'react-audio-player';

const mapStateToProps = state => ({
  currentTrack: state.track
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (id) => dispatch(fetchTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactAudioPlayer);
