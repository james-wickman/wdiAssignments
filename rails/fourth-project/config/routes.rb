Rails.application.routes.draw do


  get 'transaction/user_id'

  get 'transaction/amount:int'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
