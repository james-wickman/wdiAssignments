class CreateUsersTableColumn < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :comments, :string
  end
end
