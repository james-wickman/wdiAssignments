Rails.application.routes.draw do
  get '/index' => 'users#index'
  get '/new' => 'users#new'
  get '/james' => 'users#james'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
