import {connect} from 'react-redux';
import Profile from './profile';
import { fetchTracks, deleteTrack, createTrack, fetchTrack, fetchCurrentTrack, receivePlaying } from '../../actions/tracks_actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id)),
  receivePlaying: playing => dispatch(receivePlaying(playing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
