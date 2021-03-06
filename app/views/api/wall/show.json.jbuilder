json.set! :user_id, @user_id;
json.set! :wall do
  json.set! @user_id, @posts.pluck(:id).sort { |a, b| b <=> a }.uniq
end
json.set! :posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :content, :author_id, :recipient_id, :updated_at, :created_at
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
  json.set! :liked_posts, current_user.liked_posts.pluck(:id)
  json.set! :liked_comments, current_user.liked_comments.pluck(:id)
end
json.set! :stats do
  json.set! :post_comment_count do
    @posts.each do |post|
      json.set! post.id, post.comments_count if post.comments_count > 0
    end
  end
  json.set! :post_like_count do
    @posts.each do |post|
      json.set! post.id, post.likes_count if post.likes_count > 0
    end
  end
  json.set! :comment_like_count do
    @posts.flat_map(&:comments).each do |comment|
      json.set! comment.id, comment.likes_count if comment.likes_count > 0
    end
  end
end