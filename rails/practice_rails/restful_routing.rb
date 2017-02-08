    Prefix Verb   URI Pattern                Controller#Action
    tweets GET    /tweets(.:format)          tweets#index
           POST   /tweets(.:format)          tweets#create
 new_tweet GET    /tweets/new(.:format)      tweets#new
edit_tweet GET    /tweets/:id/edit(.:format) tweets#edit
     tweet GET    /tweets/:id(.:format)      tweets#show
           PATCH  /tweets/:id(.:format)      tweets#update
           PUT    /tweets/:id(.:format)      tweets#update
           DELETE /tweets/:id(.:format)      tweets#destroy
     users GET    /users(.:format)           users#index
           POST   /users(.:format)           users#create
  new_user GET    /users/new(.:format)       users#new
 edit_user GET    /users/:id/edit(.:format)  users#edit
      user GET    /users/:id(.:format)       users#show
           PATCH  /users/:id(.:format)       users#update
           PUT    /users/:id(.:format)       users#update
           DELETE /users/:id(.:format)       users#destroy
      root GET    /                          users#index
