class MusicSerializer < ActiveModel::Serializer
  attributes :id, :song_title, :artist, :album, :album_cover

  has_many :ratings
end
