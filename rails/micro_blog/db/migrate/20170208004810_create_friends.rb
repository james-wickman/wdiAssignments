class CreateFriends < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.string :user_id
      t.string :friend_id

      t.timestamps
    end
  end
end
