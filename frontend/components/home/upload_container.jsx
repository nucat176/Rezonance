import {connect} from 'react-redux';
import Upload from './upload';
import {createTrack} from '../../actions/tracks_actions';

const mapStateToProps = state => ({
  errors: state.track.errors || [],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createTrack: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
