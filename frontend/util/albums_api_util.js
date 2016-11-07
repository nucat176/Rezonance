export const fetchAlbums = (success, error) => {
  $.ajax({
    type: "GET",
    url: `api/albums`,
    success,
    error
  });
};

export const fetchAlbum = (id, success, error) => {
  $.ajax({
    type: "GET",
    url: `api/albums/${id}`,
    success,
    error
  });
};

export const createAlbum = (album, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/albums`,
    data: {album},
    success,
    error
  });
};

export const updateAlbum = (album, success, error) => {
  $.ajax({
    type: "PATCH",
    url: `api/albums/${album.id}`,
    data: {album},
    success,
    error
  });
};

export const deleteAlbum = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/albums/${id}`,
    success,
    error
  });
};
