class SessionsController < ApplicationController
  def new
  end

  def create
  	p params
  	@user = User.where(email: params[:email]).first
  	if @user && @user.password == params[:password]
  		session[:user_id] = @user.id 
  		flash[:notice] = "you logged in"
  		redirect_to @user 
  	else 
  		flash[:alert] = "you didn\t log in"
  		redirect_to session_new_path 
  	end
  end

  def destroy
  	session[:user_id] = nil
  	redirect_to root_path
  end
end
