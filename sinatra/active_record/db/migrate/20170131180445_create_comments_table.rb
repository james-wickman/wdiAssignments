class CreateCommentsTable < ActiveRecord::Migration[5.0]
  def change
  	create_table :comments do |t|
  		t.integer :user_id
  		t.integer :post_id
  		t.string :content
  	end
  end
end
