Rails.application.routes.draw do
  get 'sessions/new'

  post 'sessions/create'

  delete 'sessions/destroy'

  resources :users
  resources :posts

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
