json.extract! user, :id, :email, :first_name, :last_name, :school, :work, :biography
json.profile_picture url_for(user.profile_picture) if user.profile_picture.attached?
json.cover_photo url_for(user.cover_photo) if user.cover_photo.attached?