class ArticleSerializer < ActiveModel::Serializer

attributes :title, :description, :image, :favorite

has_many :comments
#   has_many :users

end
