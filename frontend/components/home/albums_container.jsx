import { connect } from 'react-redux';
import { fetchAlbums, deleteAlbum, createAlbum, fetchAlbum } from '../../actions/album_actions';
import Albums from './albums';

const mapStateToProps = state => ({
  albums: Object.keys(state.albums).map(id => state.albums[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  deleteAlbum: id => dispatch(deleteAlbum(id)),
  createAlbum: album => dispatch(createAlbum(album)),
  fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
