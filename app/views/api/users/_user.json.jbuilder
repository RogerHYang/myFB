json.extract! user, :id, :email, :first_name, :last_name, :school, :work, :biography
json.profile_picture url_for(user.profile_picture) if user.profile_picture.attached?
json.cover_photo url_for(user.cover_photo) if user.cover_photo.attached?
json.set! :sent_friend_requests do
  json.array! user.sent_friend_requests.pluck(:to_user_id)
end
json.set! :received_friend_requests do
  json.array! user.received_friend_requests.pluck(:from_user_id)
end
json.set! :friends do
  json.array! user.friends.pluck(:to_user_id)
end