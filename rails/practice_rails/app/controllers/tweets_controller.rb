class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
  end

  def new
  end

  def create
  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
    @tweet = Tweet.find(params[:id]).destroy
    redirect_to root_path
  end
end
