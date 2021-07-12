json.set! :feed, @posts.pluck(:id).sort { |a, b| b <=> a }.uniq
json.set! :posts do
  json.array!(@posts) do |post|
    json.extract! post, :id, :content, :author_id, :updated_at, :created_at
    json.set! :comments, post.comments.select {|comment| comment.parent_comment_id.nil?}.pluck(:id).sort
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
    json.set! :child_comments, comment.child_comments.pluck(:id).sort
  end
end
json.set! :xwalk do
  json.set! :comments do
    @posts.each do |post|
      json.set! post.id, post.comments.select {|comment| comment.parent_comment_id.nil?}.pluck(:id).sort if post.comments.length > 0
    end
  end
  json.set! :child_comments do
    @posts.flat_map(&:comments).each do |comment|
      json.set! comment.id, comment.child_comments.pluck(:id).sort if comment.child_comments.length > 0
    end
  end
end