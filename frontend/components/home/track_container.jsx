import {connect} from 'react-redux';
import {
  fetchTrack,
  deleteTrack,
  fetchCurrentTrack,
  updateTrack,
  receivePlaying
} from '../../actions/tracks_actions';
import {createComment, updateComment, deleteComment} from '../../actions/comment_actions';
import Track from './track';

const mapStateToProps = state => ({
  track: state.track,
  currentTrack: state.currentTrack,
  comments: state.comments,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id)),
  deleteTrack: id => dispatch(deleteTrack(id)),
  updateTrack: track => dispatch(updateTrack(track)),
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id)),
  receivePlaying: playing => dispatch(receivePlaying(playing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
