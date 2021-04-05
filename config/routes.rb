Rails.application.routes.draw do
  get  'login' => 'session#new'
  post    "login"    => "session#create"
  delete  "logout"   => "session#destroy"
  root "trangchu#index"
  
  get "/articles", to:"articles#index"
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
