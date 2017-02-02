class ChangingDateCorrectly < ActiveRecord::Migration[5.0]
  def change
  	rename_column :users, :datetime, :date_created
  	rename_column :posts, :datetime, :date_created
  	rename_column :comments, :datetime, :date_created
  end
end
