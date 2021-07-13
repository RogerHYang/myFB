json.extract! @comment, :id, :post_id, :parent_comment_id
json.set! :post_comment_count, @comment.post.comments.count