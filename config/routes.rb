Rails.application.routes.draw do
  get '/help',to:'main_pages#help'

  get '/about',to:'main_pages#about'

  root 'main_pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
