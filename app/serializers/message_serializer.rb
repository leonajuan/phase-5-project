class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :message

  belongs_to :user
end
