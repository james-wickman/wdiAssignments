class UsersController < ApplicationController
  def index #shows all users
  	@user = User.all
  end

  def new #shows new user form 
  	@user = User.new
  end

  def create #creates the user from the form data 
  	@user = User.new(params[:user])
  	if @user.save
  		redirect_to user_path(@user)
  	else
  		render 'new'
  	end
  end

  def update
  	@user = User.find(params[:id])
  	
  	if @user.update(params[:user])
  		redirect_to user_path(@user)
  	else
  		render 'edit'
  	end
  end
  def edit
  	@user = User.find(params[:id])
  end

  def show #shows the user
  	@user = User.find(params[:id])
  end
  def destroy

  	@user = User.find(params[:id])
  	if @user.destroy
  		redirect_to root_path
  	else
  		render 'index'
  	end

  end

end
