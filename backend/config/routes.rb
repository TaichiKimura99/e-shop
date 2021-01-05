Rails.application.routes.draw do
  get 'users' ,to: 'users#index'
  get 'categories' , to: 'categories#index'
  get 'items', to: 'items#index'
end
