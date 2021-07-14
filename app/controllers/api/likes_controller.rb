class Api::LikesController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def toggle
    @like = Like.where(like_params).where(user_id: current_user.id).first
    if @like.nil?
      @like = Like.new(like_params)
      @like.user_id = current_user.id
      if @like.save
        render "api/likes/show"
      else
        render json: @like.errors.full_messages, status: 422
      end
    else
      if @like.destroy
        render "api/likes/show"
      else
        render json: @like.errors.full_messages, status: 422
      end
    end
  end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end
end
