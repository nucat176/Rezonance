export const fetchArtists = (success, error) => {
  $.ajax({
    type: "GET",
    url: `api/artists`,
    success,
    error
  });
};

export const fetchArtist = (id, success, error) => {
  $.ajax({
    type: "GET",
    url: `api/artists/${id}`,
    success,
    error
  });
};

export const createArtist = (artist, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/artists`,
    data: {artist},
    success,
    error
  });
};

export const updateArtist = (artist, success, error) => {
  $.ajax({
    type: "PATCH",
    url: `api/artists/${artist.id}`,
    data: {artist},
    success,
    error
  });
};

export const deleteArtist = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/artists/${id}`,
    success,
    error
  });
};
