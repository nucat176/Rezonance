import { connect } from 'react-redux';
import { fetchArtists, deleteArtist, createArtist, fetchArtist } from '../../actions/artist_actions';
import Artists from './artists';

const mapStateToProps = state => ({
  artists: Object.keys(state.artists).map(id => state.artists[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  deleteArtist: id => dispatch(deleteArtist(id)),
  createArtist: artist => dispatch(createArtist(artist)),
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artists);
