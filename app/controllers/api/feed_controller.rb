class Api::FeedController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def show
    @posts = current_user.news_feed_posts.includes(
        :likes,
        {author: {profile_picture_attachment: :blob}},
        {comments: [{author: {profile_picture_attachment: :blob}}, :child_comments, :likes]}).to_a
      .concat(current_user.authored_posts.includes(
        :likes,
        {author: {profile_picture_attachment: :blob}},
        {comments: [{author: {profile_picture_attachment: :blob}}, :child_comments, :likes]}).to_a)
  end
end