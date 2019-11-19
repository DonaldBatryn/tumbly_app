class Api::CommentsController < ApplicationController
    before_action :require_login

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            # render "/api/posts/index"
            render json: @comment
        else
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: @comment.id
    end

    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end
end
