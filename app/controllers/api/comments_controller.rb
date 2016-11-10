class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @track = @comment.track
      render "api/tracks/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      @track = @comment.track
      render "api/tracks/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @track = @comment.track
    @comment.destroy
    render "api/comments/show"
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id, :user_id)
  end
end
