export const createComment = (comment) =>
  $.ajax({
    url: "/api/comments/",
    method: "POST",
    data: { comment },
  });

export const deleteComment = (commentId) =>
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE",
  });

export const patchComment = (comment) =>
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: "PATCH",
    data: { comment },
  });
