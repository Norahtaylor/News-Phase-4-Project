Rails.application.routes.draw do
  resources :new_articles
  resources :comments
  resources :articles
  resources :users

  post '/signup', to: 'users#create' 
  get '/me', to: 'users#show'

  # get '/create', to: 'articles#create'
  get '/readinglist', to: 'articles#indexFavorite'

  #get article comments
  # get '/articles/:id/comments', to: 'articles#articleComments'

  post '/login', to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'


end

