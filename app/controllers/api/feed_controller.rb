class Api::FeedController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def show
    @posts = current_user.news_feed_posts.includes(:author)
  end
end