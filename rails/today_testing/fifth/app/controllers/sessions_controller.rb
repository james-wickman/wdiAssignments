class SessionsController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.where(email: params[:user][:email]).first
  	if @user && @user.password == params[:user][:password]
  		session[:user_id] = @user.id 
  		flash[:notice] = "nice"
  		redirect_to @user
  	else 
  		flash[:alert] = "Either your email or password is wrong"
  		redirect_to sessions_new_path
  	end
  end

  def destroy
  	session[:user_id] = nil
  	redirect_to users_path
  end
end
