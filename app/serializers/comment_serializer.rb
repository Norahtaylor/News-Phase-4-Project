class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :article_id
  belongs_to :article
  belongs_to :user
end
