Rails.application.routes.draw do
  resources :users
  resources :comments
  resources :locations
end
