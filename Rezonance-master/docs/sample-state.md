```js

{
  currentUser: {
    id: 1,
    username: "Kris Bryant"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPlaylist: {errors: ["title can't be blank"]},
    uploadTrack: {errors: ["file must be .mp3"]}
  },
  tracks: {
    1: {
      title: "Insane",
      artist_id: 1,
      album_id: 1
    }
  },
  artists: {
    1: {
      id: 1,
      name: "Flume"
    }
  },
  albums: {
    1: {
      id: 1,
      title: "Flume (2012)",
      genre: "Electronic"
      artist_id: 1
    }
  },
  playlists: {
    id: 1,
    title: "Chill Electronic"
  }
}
