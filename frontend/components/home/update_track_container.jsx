import {connect} from 'react-redux';
import UpdateTrack from './update_track';
import {updateTrack} from '../../actions/tracks_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  track: state.track,
  errors: state.track.errors || [],
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  updateTrack: track => dispatch(updateTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTrack);
