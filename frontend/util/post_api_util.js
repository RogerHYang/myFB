export const requestFeed = (userId) =>
  $.ajax({
    url: `/api/feed/${userId}`,
  });

export const requestPosts = (userId) =>
  $.ajax({
    url: `/api/posts/${userId}`,
  });

export const createPost = (post) =>
  $.ajax({
    url: "/api/posts/",
    method: "POST",
    data: { post },
  });

export const deletePost = (postId) =>
  $.ajax({
    url: `/api/posts/${postId}`,
    method: "DELETE",
  });

export const patchPost = (post) =>
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: "PATCH",
    data: { post },
  });
