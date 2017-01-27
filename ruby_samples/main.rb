require "sinatra"
require "sendgrid-ruby"

get '/' do 
	@title = 'home'
	erb :home
end 

get '/sign-up' do 
	@title = 'sign-up'
	erb :signup 
end

get '/login' do
	@title = 'login'
	erb :signin 
end 

post '/user-info' do

	from = SendGrid::Email.new(email:'nauticalnova@hotmail.com')
	subject = 'Hello World from the SendGrid Ruby Library!'
	to = SendGrid::Email.new(email:'nauticalnova@hotmail.com')

	content = SendGrid::Content.new(type:'text/plain', value:'Hello, Email!')
	mail = SendGrid::Mail.new(from, subject, to, content)
	sg = SendGrid::API.new(api_key: ENV['SENDGRID_KEY'])

	response = sg.client.mail._('send').post(request_body: mail.to_json)

	puts response.status_code
	puts response.body


	# p params.inspect
	redirect to ('/')
end

get '/user' do 
	@title = 'user'
	@current_user = {
		name: 'James Wickman',
		email: 'nauticalnova@hotmail.com',
		sex: 'male',
		class_name: 'WDI',
	}
	erb :user 
end 


get '/employes/bob' do 
	'Bob'
end 

get '/employes/carl' do 
	'Carl'
end

get '/employes/tom' do 
	'Tom' 
end 

get '/employes/tim' do 
	'Tim'
end 
