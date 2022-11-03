Rails.application.routes.draw do
  resources :messages, only: [:index, :show, :create]
  resources :ratings, only: [:index, :show, :create]
  resources :musics, only: [:index, :show, :create]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
