export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUM = "FETCH_ALBUM";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

export const fetchAlbums = () => ({
  type: FETCH_ALBUMS
});

export const fetchAlbum = id => ({
  type: FETCH_ALBUM,
  id
});

export const createAlbum = album => ({
  type: CREATE_ALBUM,
  album
});

export const updateAlbum = album => ({
  type: UPDATE_ALBUM,
  album
});

export const deleteAlbum = id => ({
  type: DELETE_ALBUM,
  id
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});
