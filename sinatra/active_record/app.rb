require 'sinatra'
require 'sinatra/activerecord'
require './models'

set :database, 'sqlite3:winter.sqlite3'




get '/' do 
	@users = User.all 
	erb :home
end

