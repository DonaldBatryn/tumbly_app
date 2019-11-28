class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = current_user.given_follows.find_by(followee_id: params[:user_id])
    @follow.destroy
    render json: @follow.id
  end

  def index
    @followers = current_user.followers.all
    @followed_users = current_user.followed_users.all
  end

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
