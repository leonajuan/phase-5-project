class Music < ApplicationRecord

  has_many :ratings
  has_many :users, through: :ratings

  validates :song_title, presence: true
  validates :artist, presence: true

end
