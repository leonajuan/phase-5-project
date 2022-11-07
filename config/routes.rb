Rails.application.routes.draw do
  resources :messages, only: [:index, :show, :create]
  resources :ratings, only: [:index, :show, :create]
  resources :musics, only: [:index, :show, :create]
  resources :users

  post "/login", to: "users#login"
  get "/profile", to: "users#profile"
  patch "/user-bio", to: "users#update_bio"
  # patch "/user-image", to: "users#update_image"

  # include route of patch - example is: patch "/user-name", to: "users#udpate_name"
end
