Rails.application.routes.draw do
  resources :friends

  resources :users

  get 'sessions/new'

  post 'sessions/create'

  delete 'sessions/destroy'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
