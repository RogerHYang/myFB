json.set! :user_id, @user_id;
json.set! :wall do
  json.set! @user_id, @posts.pluck(:id).sort { |a, b| b <=> a }.uniq
end
json.set! :posts do
  json.array!(@posts) do |post|
    json.extract! post, :id, :content, :author_id, :updated_at, :created_at
    json.set! :comments, post.comments.select {|comment| comment.parent_comment_id.nil?}.pluck(:id).sort { |a, b| b <=> a }
  end
end
json.set! :avatars do
  json.array!(@posts.map(&:author).concat(@posts.flat_map(&:comments).map(&:author)).uniq) do |author|
    json.partial! "api/users/avatar", user: author
  end
end
json.set! :comments do
  json.array!(@posts.flat_map(&:comments)) do |comment|
    json.extract! comment, :id, :content, :author_id, :post_id, :updated_at, :created_at
    json.set! :child_comments, comment.child_comments.pluck(:id).sort { |a, b| b <=> a }.uniq
  end
end