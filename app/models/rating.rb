class Rating < ApplicationRecord

  belongs_to :user 
  belongs_to :music

  validates :rating, inclusion: 1..5
  validates :comment, length: { in: 3...250 }
  
  def show_star_ratings
    "#{'★' * self.rating}"
  end

end
