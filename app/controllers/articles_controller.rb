class ArticlesController < ApplicationController
  # GET /articles
  def index
    @articles = Article.all
    render json: @articles
  end

  # GET /articles/1
  def show
    render json: @article
  end

  def indexFavorite 
    article = Article.where(favorite: true )
    render json: article 
  end 

  # def articleComments
  #   article = Article.find(params[:id])
  #   render json: article.comments 
  # end 

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    article = Article.find(params[:id])
    article.update!(article_params)
      render json: article
  end

  # DELETE /articles/1
  def destroy
    article = Article.find(params[:id])
    article.destroy
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.permit(:title, :author, :description, :image, :category, :published_at)
    end
end