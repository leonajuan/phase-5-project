class Rating < ApplicationRecord

  belongs_to :user 
  belongs_to :music

  validates :rating, presence: true, in: 1..5
  validates :rating, length: { in: 3...250 }
  
end
