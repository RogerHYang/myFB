class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def show
    @user_id = Integer(params[:user_id])
    @posts = Post
      .where(recipient_id: @user_id)
      .includes(
        {author: {profile_picture_attachment: :blob}},
        {comments: [{author: {profile_picture_attachment: :blob}}, :child_comments]})
    render "api/wall/show"
  end

  def find_posts
    @posts = Post.where(id: params[:postIds]).includes(:friend_ids)
    render "api/wall/show"
  end

  def create
    @post = Post.new(post_params)
    @post.recipient_id = Integer(params[:recipient_id])
    @post.author_id = current_user.id
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post&.author_id == current_user.id
      if @post.update(post_params)
        render "api/posts/show"
      else
        render json: @post.errors.full_messages, status: 422
      end
    else
      render json: ['Forbidden'], status: 403
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post&.author_id == current_user.id
      if @post.destroy
        render "api/posts/show"
      else
        render json: @post.errors.full_messages, status: 422
      end
    else
      render json: ['Forbidden'], status: 403
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end
end
