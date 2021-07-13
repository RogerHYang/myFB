json.set! :user_id, @user_id;
json.set! :wall do
  json.set! @user_id, @posts.pluck(:id).sort { |a, b| b <=> a }.uniq
end
json.set! :posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :content, :author_id, :updated_at, :created_at
    end
  end
end
json.set! :avatars do
  @posts.map(&:author).concat(@posts.flat_map(&:comments).map(&:author)).uniq.each do |author|
    json.set! author.id do
      json.partial! "api/users/avatar", user: author
    end
  end
end
json.set! :comments do
  @posts.flat_map(&:comments).each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :content, :author_id, :post_id, :updated_at, :created_at
    end
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
json.set! :stats do
  json.set! :postCommentCount do
    @posts.each do |post|
      json.set! post.id, post.comments.size if post.comments.size > 0
    end
  end
end