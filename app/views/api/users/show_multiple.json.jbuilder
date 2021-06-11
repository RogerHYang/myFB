json.array!(@users) do |user|
  json.partial! "api/users/basics", user: user
end