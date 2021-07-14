export const toggleLike = (like) =>
  $.ajax({
    url: "/api/likes/",
    method: "POST",
    data: { like },
  });
