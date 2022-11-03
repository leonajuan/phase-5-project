class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|

      t.integer :user_id
      t.integer :music_id
      t.integer :rating
      t.string :comment

      t.timestamps
    end
  end
end
