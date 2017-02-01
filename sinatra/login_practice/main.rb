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
	current_user
	if session[:user_id]
		erb :logged_in
	else
		erb :home
	end

end

get '/logged_in' do 

	
	current_user

	erb :logged_in

end

get '/log_out' do 
	session[:user_id] = nil
	redirect '/'
end

post '/new-user' do 
	p "PARAMS #{params}"
	@user = User.new(params[:user]) 
	if @user.save
		session[:user_id] = @user.id
		redirect '/logged_in'
	end
end

post '/login' do 
	@user = User.where(email: params[:user][:email]).first
	if @user.password == params[:user][:password]
		session[:user_id] = @user.id
		flash[:notice] = 'Signed in Successfull'
		redirect '/logged_in'
	else
		flash[:alert] = 'Email or password incorrect'
		erb :home
	end
end 