class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :parent_comment_id, :content)
  end
end
