class ChangingDate < ActiveRecord::Migration[5.0]
  def change
  	rename_column :users, :date_created, :datetime
  	rename_column :posts, :date_created, :datetime
  	rename_column :comments, :date_created, :datetime
  end
end
