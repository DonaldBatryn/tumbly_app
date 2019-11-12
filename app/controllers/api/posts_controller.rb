class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id    
    if @post.save
      render "/api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      render json: @post
    else
      render json: @post.errors.full_messages
    end
  end

  def show
    @post = Post.with_attached_images.find(params[:id])
  end

  def index
    @posts = Post.all.page(params[:page]).per(3).order('created_at DESC')
    
    render "/api/posts/index"
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy
    render json: ['Post deleted successfully']
  end

  def post_params
    params.require(:post).permit(:title, :body, :post_type, images: [])
  end
end
