export const requestUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
  });

export const requestUsers = (userIds) =>
  $.ajax({
    url: "/api/find_users/",
    method: "POST",
    data: { userIds },
  });

export const updateUser = (user) =>
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user },
  });
