class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like.id
  end

  def index
    @likes = current_user.likes.all
  end

  def like_params
    params.require(:like).permit(:post_id)
  end
end
