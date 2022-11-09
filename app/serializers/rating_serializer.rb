class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :music_id, :rating, :comment, :show_star_ratings

  belongs_to :music

  def show_star_ratings
    "#{'★' * self.object.rating}"
  end

end
