class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|

      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :bio
      t.string :image

      t.timestamps
    end
  end
end
