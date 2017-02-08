class HomeController < ApplicationController
  def index
  end

  def search
  	p params
  	@users = User.where(first_name: params[:name])

  end
end
