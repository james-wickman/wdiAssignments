class CreateCommentsTable < ActiveRecord::Migration[5.0]
  def change
  	create_table :comments do |t|
  		t.integer :posts_id
  		t.integer :users_id
  		t.string :content
  	end
  end
end
