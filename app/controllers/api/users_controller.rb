class Api::UsersController < ApplicationController
  # before_action :require_logged_in, only: [:destroy]

  def show
    @user = User.find_by(id: params[:id])
  end

  def find_users
    @users = User.where(id: params[:userIds]).includes(:friend_ids)
    render "api/users/show_multiple"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.id == current_user.id
      @user.attributes.each do |k, v|
        if user_params.include?(k)
          @user[k] = user_params[k]
        end
      end
      if @user.save
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email, 
      :password,
      :first_name,
      :last_name,
      :birth_date,
      :gender,
      :biography,
      :work,
      :school
    )
  end
end
