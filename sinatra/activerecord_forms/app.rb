require 'sinatra'
require 'sinatra/activerecord'
require './models'
require 'bundler/setup'
require 'sinatra/flash'

set :database, 'sqlite3:winter.sqlite3'
set :sessions, true

def current_user
	if session[:user_id] 
		User.find(session[:user_id])
	end
end

get "/" do 
	
	@user = User.new

	erb :home
end

get "/user" do 
	@users = User.all
	erb :user
end
post '/new-user' do 
	@user = User.new(first_name: params[:first_name], last_name: params[:last_name],password: params[:password], email: params[:email]);
	if @user.save
		redirect '/logged-in'
	end
end

get '/logged-in' do 
	@user = User.last 
	erb :user 
end



post '/sign-in' do 
	@user = User.where(email: params[:email]).first
	if @user && @user.password == params[:password]
		session[:user_id] = @user.id  #logging in the user
		flash[:notice] = 'Signed In Successfully!'
		redirect '/logged-in'
	else
		flash[:alert] = "Either your email or password is wrong"
		erb :home
	end
end
