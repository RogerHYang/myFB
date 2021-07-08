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

export const requestFeed = (userId) =>
  $.ajax({
    url: `/api/feed/${userId}`,
  });
