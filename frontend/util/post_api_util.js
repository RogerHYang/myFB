export const requestFeed = (userId) =>
  $.ajax({
    url: `/api/feed/${userId}`,
  });

export const requestPosts = (userId) =>
  $.ajax({
    url: `/api/posts/${userId}`,
  });

export const createPost = (post, recipientId) =>
  $.ajax({
    url: `/api/posts/${recipientId}`,
    method: "POST",
    data: { post },
  });

export const deletePost = (postId) =>
  $.ajax({
    url: `/api/posts/${postId}`,
    method: "DELETE",
  });

export const updatePost = (post) =>
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: "PATCH",
    data: { post },
  });
