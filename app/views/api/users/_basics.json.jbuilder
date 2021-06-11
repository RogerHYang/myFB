json.extract! user, :id, :first_name, :last_name
json.profile_picture url_for(user.profile_picture) if user.profile_picture.attached?
json.set! :friend_ids do
  json.array! user.friend_ids.pluck(:to_user_id)
end