class MusicSerializer < ActiveModel::Serializer
  attributes :id, :song_title, :artist, :album, :album_cover
end
