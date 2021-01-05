Rails.application.routes.draw do
  get 'categories' , to: 'categories#index'
  get 'items', to: 'items#index'
end
