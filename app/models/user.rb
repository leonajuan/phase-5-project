class User < ApplicationRecord

  has_many :ratings 
  has_many :musics, through: :ratings

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  
end
