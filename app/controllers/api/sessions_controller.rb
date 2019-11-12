class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if @user
      login(@user)
      render json: @user
    else
      render json: ["Wrong email or password, please try again"], status: 401
    end
  end

  def destroy
    logout
    render json: ['Logged out successfully']
  end
end
