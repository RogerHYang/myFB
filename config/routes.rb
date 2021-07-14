Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api do
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :update, :destroy]

    post '/likes/', to: 'posts#toggle'

    get '/posts/:user_id', to: 'posts#show'
    
    get '/feed/:user_id', to: 'feed#show'
    get '/profile/:user_id', to: 'profile#show'

    post '/find_users', to: 'users#find_users'

    post '/friends/:from_user_id/:to_user_id', to: 'friends#create'
    delete '/friends/:from_user_id/:to_user_id', to: 'friends#destroy'
  end
end