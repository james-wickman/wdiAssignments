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


post '/old_user' do 
	@user = User.where(email: params[:user][:email])
	if @user.password == params[:user][:password]
		session[:user_id] = @user.id 
		flash[:notice] = 'Signed In Successfull'
		redirect '/userpage'
	else 
		flash[:alert] = 'Email or Password incorrect'
		erb :sign_in
	end	
end 

get '/log_out' do 
	session[:user_id] = nil
	redirect '/'
end

post '/new_user' do 
	@user = User.new(params[:user])
	if @user.save
		session[:user_id] = @user.id 

		redirect '/userpage'
	else 
		erb :sign_up
	end
end 

get '/userpage' do 
	current_user
	erb :userpage
end

get '/login' do 


	erb :login
end

get '/sign_up' do 

	erb :sign_up

end