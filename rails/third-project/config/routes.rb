Rails.application.routes.draw do
  get '/new' => 'users#new'

  get '/old' => 'users#old'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
