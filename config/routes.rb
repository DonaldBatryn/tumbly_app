Rails.application.routes.draw do
  root to: "static_pages#root"

  get :search_posts, controller: :main
  get :search_users, controller: :main

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :update, :destroy, :index] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
  end
end