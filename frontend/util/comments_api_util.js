export const createComment = (comment, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/comments`,
    data: {comment},
    success,
    error
  });
};

export const updateComment = (comment, success, error) => {
  $.ajax({
    type: "PATCH",
    url: `api/comments/${comment.id}`,
    data: {comment},
    success,
    error
  });
};

export const deleteComment = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/comments/${id}`,
    success,
    error
  });
};
