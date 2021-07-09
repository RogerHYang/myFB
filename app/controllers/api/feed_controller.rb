class Api::FeedController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def show
    @posts = current_user.news_feed_posts.includes({author: [{profile_picture_attachment: :blob}, {cover_photo_attachment: :blob}]}, {comments: :child_comments})
  end
end