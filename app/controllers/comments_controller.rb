class CommentsController < ApplicationController
  # before_action :set_comment, only: %i[ show update destroy ]

  # GET /comments
  def index
   comment = Comment.all 
   render json: comment 
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    comment = Comment.create!(comment_params)
    render json: comment 
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    end
  end

  # DELETE /comments/1
  def destroy
    comment = Comment.find(params[:id])
    comment.destroy 
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_comment
    #   @comment = Comment.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:user_id, :article_id, :comment)
    end
end