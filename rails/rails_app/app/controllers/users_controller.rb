class UsersController < ApplicationController
  def index
    @user = User.all 
  end

  def new
  end

  def create
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
    @user = User.find(params[:id]).destroy
    redirect_to root_path
  end
end
