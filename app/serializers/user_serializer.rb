class UserSerializer < ActiveModel::Serializer
    attributes :first_name, :last_name, :username, :password, :id
    has_many :comments
    has_many :articles
  end