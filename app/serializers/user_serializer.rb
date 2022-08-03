class UserSerializer < ActiveModel::Serializer
  attributes :username, :id
  has_many :comments
  has_many :articles
end
