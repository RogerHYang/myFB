json.set! :like
  json.extract! @like, :id, :user_id, :likeable_id, :likeable_type
end
case @like.likeable_type
when 'Post'
  json.set! :postLikeCount do
    json.set! @like.likeable_id, @like.likeable.likes.count
  end
when 'Comment'
  json.set! :commentLikeCount do
    json.set! @like.likeable_id, @like.likeable.likes.count
  end
end