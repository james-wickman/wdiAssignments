class AddingDate < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :date_created, :datetime, :default => DateTime.now
  	add_column :posts, :date_created, :datetime, :default => DateTime.now
  	add_column :comments, :date_created, :datetime, :default => DateTime.now
  end
end
