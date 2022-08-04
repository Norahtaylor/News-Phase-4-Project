class NewArticlesController < ApplicationController

      # GET /articles
  def index
    @new_articles = Article.all

    render json: @new_articles
  end

  # GET /articles/1
  def show
    render json: @new_article
  end

  # POST /articles
  def create
    @new_article = Article.new(article_params)

    if @new_article.save
      render json: @new_article, status: :created, location: @new_article
    else
      render json: @new_article.errors, status: :unprocessable_entity
    end
  end

end
