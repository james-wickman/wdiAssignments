class User < ActiveRecord::Base
	has_many :posts
	has_many :comments
end

class Post < ActiveRecord::Base
	has_many :comments
	belongs_to :users

end

class Comment < ActiveRecord::Base
	belongs_to :posts
	belongs_to :users 

end