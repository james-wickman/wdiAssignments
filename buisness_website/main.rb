require "sinatra"
require "sendgrid-ruby"

current_user_name = 'guest'
current_user_email = nil 


get '/' do 
	@user = current_user_name
	@home = "active"
	@signin = ""
	@sign_up = ""
	@inventory = ''
	@title = "home"
	erb :home
end 

get '/signin' do
	@user = current_user_name
	@home = ""
	@signin = "active"
	@sign_up = ""
	@inventory = ''
	@title = "signin"


	erb :signin 
	
end 

get '/sign_up' do 
	@user = current_user_name
	@home = ""
	@signin = ""
	@sign_up = "active"
	@inventory = ''
	@title = "sign-up"
	erb :sign_up
end 

get '/inventory' do 
	@user = current_user_name
	@home = ""
	@signin = ""
	@sign_up = ""
	@inventory = 'active'
	@title = "inventory"
	if current_user_name == 'guest'
		erb :inventory
	else 
		redirect to '/inventory/signedin'
	end
end



post '/sign_up/submit' do 
	p params.inspect

	@current_user = {
		name: params[:user_fname] + " " + params[:user_lname],
		email: params[:user_email],
		password: params[:user_password],
	}
 	if @current_user[:name] == " "
 		current_user_name = 'guest'
 	else
		current_user_name = @current_user[:name]
		current_user_email = @current_user[:email]
	end


	from = SendGrid::Email.new(email:'nauticalnova@hotmail.com')
	subject = 'Thank you fo joining my site'
	to = SendGrid::Email.new(email:'current_user_email')

	content = SendGrid::Content.new(type:'text/plain', value:'Hello, ' + current_user_name)
	mail = SendGrid::Mail.new(from, subject, to, content)
	sg = SendGrid::API.new(api_key:ENV['SENDGRID_KEY'])

	response = sg.client.mail._('send').post(request_body: mail.to_json)

	puts response.status_code
	puts response.body


	redirect to '/inventory/signedin'
end 

get '/inventory/signedin' do
	@user = current_user_name

	@home = ""
	@signin = ""
	@sign_up = ""
	@inventory = '' 
	@title = "signed in inventory"
	if current_user_name == 'guest'
		redirect to '/signin'
	else
		erb :inventory_signed_in
	end
end

get '/contact_us' do 
	@user = current_user_name
	@title = "Contact Us"
	p params[:car_id]
	if params[:car_id] != nil 
		
		@subject = params[:car_id]
	end
	if current_user_name == 'guest'
		redirect to '/signin'
	else
		erb :contact_us
	end
end

post '/contact_us/submit' do

	@contact_user = {
		subject: params[:contact_subject],
		body: params[:contact_content],
	}
	subject = @contact_user[:subject]
	body = @contact_user[:body]



	from = SendGrid::Email.new(email:'nauticalnova@hotmail.com')
	subject = current_user_email + " " + subject
	to = SendGrid::Email.new(email:'nauticalnova@hotmail.com')

	content = SendGrid::Content.new(type:'text/plain', value:body)
	mail = SendGrid::Mail.new(from, subject, to, content)
	sg = SendGrid::API.new(api_key:ENV['SENDGRID_KEY'])

	response = sg.client.mail._('send').post(request_body: mail.to_json)

	puts response.status_code
	puts response.body

	redirect to '/'

end










