case @like.likeable_type
when 'Post'
  json.set! :stats do
    json.set! :postLikeCount do
      json.set! @like.likeable_id, @like.likeable.likes.count
    end
  end
  json.set! :likedPosts, @like.user.liked_posts.pluck(:id)
when 'Comment'
  json.set! :stats do
    json.set! :commentLikeCount do
      json.set! @like.likeable_id, @like.likeable.likes.count
    end
  end
  json.set! :likedComments, @like.user.liked_comments.pluck(:id)
end