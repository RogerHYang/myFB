json.array!(@users) do |user|
  json.partial! "api/users/details", user: user
end