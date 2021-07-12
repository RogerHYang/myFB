class Api::FriendsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    from_user_id, to_user_id = params.values_at(:from_user_id, :to_user_id)
    unless current_user.id == params[:from_user_id]
      forward = Connection.create(from_user_id: from_user_id, to_user_id: to_user_id, status: Connection::PENDING)
      backward = Connection.find_by(from_user_id: to_user_id, to_user_id: from_user_id)
      unless backward.nil?
        backward.status = Connection::ACCEPTED
        backward.save!
        forward.status = Connection::ACCEPTED
      end
      forward.save!
    end
    @users = User.where(id: [from_user_id, to_user_id])
    render "api/users/show_multiple"
  end

  def destroy
    from_user_id, to_user_id = params.values_at(:from_user_id, :to_user_id)
    unless current_user.id == params[:from_user_id]
      forward = Connection.find_by(from_user_id: from_user_id, to_user_id: to_user_id)
      backward = Connection.find_by(from_user_id: to_user_id, to_user_id: from_user_id)
      if forward.nil?
        unless backward.nil?
          backward.status = Connection::REJECTED
          backward.save!
        end
      else
        forward.destroy!
        unless backward.nil?
          backward.destroy!
        end
      end
    end
    @users = User.where(id: [from_user_id, to_user_id])
    render "api/users/show_multiple"
  end
end