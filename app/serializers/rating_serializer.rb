class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :music_id, :rating, :comment

  belongs_to :music
end
