class Api::UsersController < ApplicationController
  # before_action :require_logged_in, only: [:destroy]

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
    
    debugger
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
