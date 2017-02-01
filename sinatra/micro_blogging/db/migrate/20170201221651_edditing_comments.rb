class EdditingComments < ActiveRecord::Migration[5.0]
  def change
  	rename_column :comments, :comment_id, :post_id
  end
end
