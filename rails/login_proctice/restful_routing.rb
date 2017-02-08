          Prefix Verb   URI Pattern                 Controller#Action
    sessions_new GET    /sessions/new(.:format)     sessions#new
 sessions_create POST   /sessions/create(.:format)  sessions#create
sessions_destroy DELETE /sessions/destroy(.:format) sessions#destroy
            root GET    /                           home#index
           users GET    /users(.:format)            users#index
                 POST   /users(.:format)            users#create
        new_user GET    /users/new(.:format)        users#new
       edit_user GET    /users/:id/edit(.:format)   users#edit
            user GET    /users/:id(.:format)        users#show
                 PATCH  /users/:id(.:format)        users#update
                 PUT    /users/:id(.:format)        users#update
                 DELETE /users/:id(.:format)        users#destroy
