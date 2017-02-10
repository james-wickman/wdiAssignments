class HomeController < ApplicationController
  def index
  	begin
  		puts wickman
  	rescue => e
  		puts "Error #{e}"
  	end
  end
end
