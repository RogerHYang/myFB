export const requestPosts = (userId) =>
  $.ajax({
    url: `/api/posts/${userId}`,
  });

export const createPost = (post, userId) =>
  $.ajax({
    url: `/api/posts/${userId}`,
    method: "POST",
    data: { post },
  });
