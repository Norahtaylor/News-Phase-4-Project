Rails.application.routes.draw do
  resources :new_articles
  #namespace :api do

  resources :comments
  resources :articles
  resources :users

  post '/signup', to: 'users#create' 
  get '/me', to: 'users#show'

  # get '/create', to: 'articles#create'
  get '/readinglist', to: 'articles#indexFavorite'

  post '/login', to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'

   #end


end

