Rails.application.routes.draw do
  resources :messages, only: [:index, :show, :create]
  resources :ratings, only: [:index, :show, :create]
  resources :musics, only: [:index, :show, :create]
  resources :users

  post "/login", to: "users#login"
  get "/profile", to: "users#profile"
  # include route of patch - example is: patch "/user-name", to: "users#udpate_name"
end
