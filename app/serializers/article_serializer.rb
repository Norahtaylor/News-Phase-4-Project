class ArticleSerializer < ActiveModel::Serializer

attributes :id, :title, :description, :image, :favorite

has_many :comments
#   has_many :users

end