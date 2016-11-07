export const FETCH_ARTISTS = "FETCH_ARTISTS";
export const FETCH_ARTIST = "FETCH_ARTIST";
export const CREATE_ARTIST = "CREATE_ARTIST";
export const UPDATE_ARTIST = "UPDATE_ARTIST";
export const DELETE_ARTIST = "DELETE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const REMOVE_ARTIST = "REMOVE_ARTIST";

export const fetchArtists = () => ({
  type: FETCH_ARTISTS
});

export const fetchArtist = id => ({
  type: FETCH_ARTIST,
  id
});

export const createArtist = artist => ({
  type: CREATE_ARTIST,
  artist
});

export const updateArtist = artist => ({
  type: UPDATE_ARTIST,
  artist
});

export const deleteArtist = id => ({
  type: DELETE_ARTIST,
  id
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const removeArtist = artist => ({
  type: REMOVE_ARTIST,
  artist
});
