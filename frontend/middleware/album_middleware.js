import {
  receiveAlbums,
  receiveAlbum,
  removeAlbum,
  FETCH_ALBUMS,
  FETCH_ALBUM,
  CREATE_ALBUM,
  UPDATE_ALBUM,
  DELETE_ALBUM
} from '../actions/album_actions';

import {
  fetchAlbums,
  fetchAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum
} from '../util/albums_api_util';

const AlbumMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAlbumsSuccess = albums => dispatch(receiveAlbums(albums));
  let receiveAlbumSuccess = album => dispatch(receiveAlbum(album));
  let removeAlbumSuccess = album => dispatch(removeAlbum(album));
  switch(action.type){
    case FETCH_ALBUMS:
      fetchAlbums(receiveAlbumsSuccess, error);
      return next(action);
    case FETCH_ALBUM:
      fetchAlbum(action.id, receiveAlbumSuccess, error);
      return next(action);
    case CREATE_ALBUM:
      createAlbum(action.album, receiveAlbumSuccess, error);
      return next(action);
    case UPDATE_ALBUM:
      updateAlbum(action.album, receiveAlbumSuccess, error);
      return next(action);
    case DELETE_ALBUM:
      deleteAlbum(action.id, removeAlbumSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default AlbumMiddleware;
