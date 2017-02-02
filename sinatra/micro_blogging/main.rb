require 'sinatra'
require 'sinatra/activerecord'
require './models'
require 'bundler/setup'
require 'sinatra/flash'

set :database, 'sqlite3:winter.sqlite3'
set :sessions, true


def current_user
	if session[:user_id]
		@user = User.find(session[:user_id])
	end
end

get '/' do 
	if session[:user_id]
		redirect '/userpage'
	else
		erb :home
	end
end

post '/update' do 
	current_user

	@user.update_attributes(params[:user])
	if @user.update_attributes(params[:user])
		redirect 'userpage'
	else 
		erb :edit_user
	end
end


post '/old_user' do 
	if User.where(email: params[:user][:email]).count != 0
		@user = User.where(email: params[:user][:email]).last
		if @user.password == params[:user][:password]
			session[:user_id] = @user.id 
			flash[:notice] = 'Signed In Successfull'
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
	session[:user_id] = nil
	redirect '/'
end

post '/new_user' do 
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


	erb :login
end

get '/edit_user' do 
	current_user

	erb :edit_user

end 

get '/blog_post' do 

	erb :blogpost 
end

get '/sign_up' do 

	erb :sign_up

end

get '/delete_user' do 
	current_user
	@user.destroy
	session[:user_id] = nil
	redirect '/'
end

post '/create_post' do 
	current_user
	if params[:post][:title] != '' && params[:post][:content] != '' 
		params[:post][:date_created] = Time.now
		@post = @user.posts.new(params[:post])
		if @post.save
			flash[:notice] = 'Added Post'
			redirect '/'
		else
			flash[:alert] = 'something went wrong'
			redirect '/blog_post'
		end
	else 
		flash[:alert] = 'Please make sure both fields are filled out'
		redirect '/blog_post'
	end
end 











