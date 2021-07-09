class Api::PostsController < ApplicationController
  # before_action :require_logged_in, only: [:destroy]

  def show
    @user_id = Integer(params[:user_id])
    @posts = Post.where(recipient_id: @user_id).includes({author: [{profile_picture_attachment: :blob}, {cover_photo_attachment: :blob}]}, {comments: :child_comments})
    render "api/posts/show"
  end

  def find_posts
    @posts = Post.where(id: params[:postIds]).includes(:friend_ids)
    render "api/posts/show"
  end

  def create
    @post = Post.new(post_params)
    @post.recipient_id = Integer(params[:user_id])
    @post.author_id = current_user.id
    if @post.save      
      @user_id = @post.recipient_id
      @posts = Post.where(recipient_id: @user_id).includes(:author)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end
end
