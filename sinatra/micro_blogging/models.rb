class User < ActiveRecord::Base
	has_many :posts
	has_many :comments

	def full_name
		if !first_name.nil? && !last_name.nil?
			first_name + ' ' + last_name 

		elsif !first_name.nil?
			first_name
		elsif !last_name.nil?
			last_name
		else 
			'(No Name)'
		end

	end
	def info
		if !ocupation.nil? && !hobbies.nil? && !sex.nil?
			"Ocupation: " + ocupation + "<br>" + "Hobbies: " + hobbies + "<br>" + "Sex: " + sex
		elsif !hobbies.nil? && !sex.nil?
			 "Hobbies: " + hobbies + "<br>" + "Sex: " + sex
		elsif !sex.nil? && !ocupation.nil?
			"Ocupation: " + ocupation + "<br>" + "Sex: " + sex
		elsif !ocupation.nil?
			"Ocupation: " + ocupation + "<br>"
		elsif !hobbies.nil?
			"Hobbies: " + hobbies + "<br>"
		elsif !sex.nil?
			"Sex: " + sex + "<br>"
		end
	end
	def edditing_user(passedin) 
		update_attributes(passedin)
	end

	def self.users_with_posts
		user_array = []
		self.all.each do |user|
			if user.posts.count > 0
				user_array << user
			end
		end
		user_array
	end
end

class Post < ActiveRecord::Base
	has_many :comments
	belongs_to :users

end

class Comment < ActiveRecord::Base
	belongs_to :users
	belongs_to :posts
end