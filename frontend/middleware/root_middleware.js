import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import ArtistsMiddleware from './artists_middleware';
import AlbumMiddleware from './album_middleware.js';
import CommentsMiddleware from './comments_middleware.js';
import UserMiddleware from './user_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  ArtistsMiddleware,
  AlbumMiddleware,
  CommentsMiddleware,
  UserMiddleware
);

export default RootMiddleware;
