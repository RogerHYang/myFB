class Api::FriendsController < ApplicationController

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
    @user = current_user
    render "api/users/show"
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
    @user = current_user
    render "api/users/show"
  end
end