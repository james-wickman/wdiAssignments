class CreateUsersTableDropColumn < ActiveRecord::Migration[5.0]
  def change
  	remove_column :users, :comments
  end
end
