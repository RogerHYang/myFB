class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @comment = Comment.new(comment_create_params)
    @comment.author_id = current_user.id
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment&.author_id == current_user.id
      if @comment.update(comment_update_params)
        render "api/comments/show"
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ['Forbidden'], status: 403
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment&.author_id == current_user.id
      if @comment.destroy
        render "api/comments/deleted"
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ['Forbidden'], status: 403
    end
  end

  private

  def comment_create_params
    params.require(:comment).permit(:content, :post_id, :parent_comment_id)
  end

  def comment_update_params
    params.require(:comment).permit(:content)
  end
end
