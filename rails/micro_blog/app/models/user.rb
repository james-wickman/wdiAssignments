class User < ApplicationRecord
	has_many :friends
	has_many :posts
	has_many :comments
end
