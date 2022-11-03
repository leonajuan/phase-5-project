class CreateMusics < ActiveRecord::Migration[7.0]
  def change
    create_table :musics do |t|

      t.string :song_title 
      t.string :artist
      t.string :album
      t.string :album_cover

      t.timestamps
    end
  end
end
