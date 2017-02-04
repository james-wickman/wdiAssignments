require 'sinatra'
require 'sinatra/activerecord'
require './models'
require 'bundler/setup'
require 'sinatra/flash'

set :database, 'sqlite3:winter.sqlite3'
set :sessions, true

current_comment = 0
current_post = 0
view_user = 0

def current_user
	if session[:user_id]
		@user = User.find(session[:user_id])
	end
end
get '/' do 
	current_user
	@users_with_posts = User.users_with_posts
	if session[:user_id]
		redirect '/userpage'
	else
		erb :home
	end
end
post '/update' do 
	current_user

	@user.edditing_user(params[:user])
	if @user.update_attributes(params[:user])
		redirect 'userpage'
	else 
		erb :edit_user
	end
end
post '/old_user' do 
	current_user
	if User.where(email: params[:user][:email]).count != 0
		@user = User.where(email: params[:user][:email]).last
		if @user.password == params[:user][:password]
			session[:user_id] = @user.id 
			flash[:notice] = 'Signed In Successful'
			redirect '/userpage'
		else 
			flash[:alert] = 'Email or Password incorrect'
			redirect 'login'
		end	
	else
		flash[:alert] = 'No users with that email'
		redirect '/login'
	end
end 
get '/log_out' do
	current_user 
	session[:user_id] = nil
	redirect '/'
end
post '/new_user' do 
	current_user
	if User.where(email: params[:user][:email]).count == 0
		params[:user][:date_created] = Time.now
		@user = User.new(params[:user])
		if @user.save
			session[:user_id] = @user.id 

			redirect '/userpage'
		else 
			erb :sign_up
		end
	else
		flash[:alert] = 'email already exists'
		erb :sign_up

	end
end 
get '/userpage' do 
	current_user
	@post = @user.posts.all
	erb :userpage
end
get '/login' do 
	current_user


	erb :login
end
get '/edit_user' do 
	current_user

	erb :edit_user
end 
get '/blog_post' do 
	current_user

	erb :blogpost 
end
get '/sign_up' do 
	current_user

	erb :sign_up
end
get '/delete_user' do 
	current_user
	Post.where(user_id: current_user.id).destroy_all
	Comment.where(user_id: current_user.id).destroy_all
	@user.destroy
	session[:user_id] = nil
	redirect '/'
end
post '/create_post' do 
	current_user
	if params[:post][:title] != '' && params[:post][:content] != '' 
		params[:post][:date_created] = Time.now
		@post = @user.posts.new(params[:post])
		if @post.checking_content_length
			if @post.save
				flash[:notice] = 'Added Post'
				redirect '/'
			else
				flash[:alert] = 'something went wrong'
				redirect '/blog_post'
			end
		else
			flash[:alert] = 'something went wrong'
			redirect '/blog_post'
		end
	else 
		flash[:alert] = 'Please make sure both fields are filled out'
		redirect '/blog_post'
	end
end 
get '/feed' do 
	current_user
	@posts = Post.all.order(date_created: :desc).limit(10)
	@users = User.all
	erb :feed
end
get '/create_comment' do 
	current_user
	if params[:post_id]
		current_comment = params[:post_id]
	end
	@post = Post.find(current_comment)
	
	erb :create_comment
end 
get '/view_comment' do 
	current_user
	if session[:user_id] != nil
		current_comment = params[:post_id]

		@post = Post.find(current_comment)
		@users = User.all 
		
		@comments = Comment.where(post_id: current_comment)
		erb :view_post_comments
	else
		flash[:alert] = "Please Login first"
		redirect '/login'
	end
end 
post '/make_comment' do 
	current_user
	
	@post = Post.find(current_comment)
	# @viewed_user = User.find(@post.user_id)
	if params[:comment][:content] != ''
		params[:comment][:user_id] = @post.user_id
		params[:comment][:date_created] = Time.now
		@comment = @post.comments.new(params[:comment])
		if @comment.save
			flash[:notice] = 'Added Comment'
			redirect '/feed'
		else
			flash[:alert] = 'something went wrong'
			redirect '/create_comment'
		end

	else 
		flash[:alert] = 'Please make sure you fill out comment'
		reroute '/create_comment'
	end	
	
end 
get '/edit_post' do 
	current_user
	current_post = params[:post_id]
	@post = Post.find(current_post)


	erb :edit_posts
end 
post '/edit_post' do 
	@post = Post.find(current_post)
	if params[:post][:content]
		@post.update_attributes(params[:post])
		if @post.update_attributes(params[:post])
			flash[:notice] = 'Changes Saved'
			redirect '/feed'
		else 
			flash[:alert] = 'Something Went wrong'
			redirect '/userpage'
		end
	end
end 
get '/delete_post' do 
	current_user
	@post = Post.find(params[:post_id]).last
	@post.destroy
	redirect '/'
end 
get '/edit_comment' do 
	current_user
	current_comment = params[:comment_id]
	@comment = Comment.find(current_comment)

	erb :edit_comments
end 
post '/edit_comment' do 

	@comment = Comment.find(current_comment)
	if params[:comment][:content]
		@comment.update_attributes(params[:comment])
		if @comment.update_attributes(params[:comment])
			flash[:notice] = 'Changes Saved'
			redirect '/feed'
		else 
			flash[:alert] = 'Something Went wrong'
			redirect '/userpage'
		end
	end
end 
get '/delete_comment' do 
	current_user
	@comment = Comment.find(params[:comment_id])
	@comment.destroy
	redirect '/'
end 
get '/user/:id' do 
	current_user
	@viewed_user = User.find(params[:id])
	@post = @viewed_user.posts.all


	erb :view_user
end 














