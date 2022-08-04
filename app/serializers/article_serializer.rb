class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :image
  has_many :comments
  has_many :users
end
