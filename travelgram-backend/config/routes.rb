Rails.application.routes.draw do
  get "/users" => 'users#index'
  get "/locations" => 'locations#index'
  get "/comments" => 'comments#index'
end
