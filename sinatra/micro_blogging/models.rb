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
		if !ocupation.nil? && ocupation != '' && !hobbies.nil? && hobbies != '' && !sex.nil? && sex!= ''
			"Ocupation: " + ocupation + "<br>" + "Hobbies: " + hobbies + "<br>" + "Sex: " + sex
		elsif !hobbies.nil? && hobbies != '' && !sex.nil? && sex != ''
			 "Hobbies: " + hobbies + "<br>" + "Sex: " + sex
		elsif !sex.nil? && sex != '' && !ocupation.nil? && ocupation != ''
			"Ocupation: " + ocupation + "<br>" + "Sex: " + sex
		elsif !hobbies.nil? && hobbies != '' && !ocupation.nil? && ocupation != ''
			"Ocupation: " + ocupation + "<br>" + "Hobbies: " + hobbies
		elsif !ocupation.nil? && ocupation != ''
			"Ocupation: " + ocupation + "<br>"
		elsif !hobbies.nil? && hobbies != ''
			"Hobbies: " + hobbies + "<br>"
		elsif !sex.nil? && sex != ''
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

	def checking_content_length
		content.length <= 150
	end

end

class Comment < ActiveRecord::Base
	belongs_to :users
	belongs_to :posts
end












