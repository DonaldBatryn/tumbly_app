class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.with_attached_image.find_by(id: params[:id])

    if @user
      render "/api/users/show"
    else
      render json: ["Page Not Found"], status: 404
    end
  end

  def index
    @users = User.all
    render "/api/users/index"
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :image)
  end
end