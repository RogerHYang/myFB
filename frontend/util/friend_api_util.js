export const createFriendConnection = (fromUserId, toUserId) =>
  $.ajax({
    url: `/api/friends/${fromUserId}/${toUserId}`,
    method: "POST",
  });

export const removeFriendConnection = (fromUserId, toUserId) =>
  $.ajax({
    url: `/api/friends/${fromUserId}/${toUserId}`,
    method: "DELETE",
  });
