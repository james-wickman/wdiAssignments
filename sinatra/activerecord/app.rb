require 'sinatra'
require 'sinatra/activerecord'
require './models'


set :database, 'sqlite3:winter.sqlite3'


get "/" do 
	
	@users = User.create(email: "nautical", first_name: "James", last_name: 'wickman')
	@post = @users.posts.create(content: 'Here is my first post!')
	@comment = @post.comments.create(user_id: @users.id, content: 'thats cool')
	erb :home
end

get "/user" do 
	@users = User.all
	erb :user
end
