json.set! :user_id, @user_id;
json.set! :posts do
  json.array!(@posts) do |post|
    json.extract! post, :id, :content, :author_id, :updated_at, :created_at
  end
end
json.set! :avatars do
  json.array!(@posts.map(&:author).uniq) do |author|
    json.partial! "api/users/avatar", user: author
  end
end
json.set! :comments do
  json.array!(@posts.flat_map(&:comments)) do |comment|
    json.extract! comment, :id, :content, :author_id, :post_id, :updated_at, :created_at
    json.set! :child_comments, comment.child_comments.order('id desc').pluck(:id)
  end
end