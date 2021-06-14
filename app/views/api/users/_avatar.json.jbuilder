json.extract! user, :id, :first_name, :last_name
json.profile_picture url_for(user.profile_picture) if user.profile_picture.attached?