class AddingUserTables < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :ocupation, :string
  	add_column :users, :hobbies, :string
  	add_column :users, :sex, :string
  	add_column :users, :comments, :string
  end
end
