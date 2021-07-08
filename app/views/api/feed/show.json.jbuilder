json.set! :feed do
  json.array!(@posts) do |post|
    json.extract! post, :id, :content, :author_id, :updated_at, :created_at
  end
end
json.set! :avatars do
  json.array!(@posts.map(&:author).uniq) do |author|
    json.partial! "api/users/avatar", user: author
  end
end