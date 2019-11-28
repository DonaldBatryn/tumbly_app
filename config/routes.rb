Rails.application.routes.draw do

  root to: "static_pages#root"

  get :search_posts, controller: :main
  get :search_users, controller: :main

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update] do
      resources :follows, only: [:create]
      resource :follow, only: [:destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :update, :destroy, :index] do
      resources :comments, only: [:create]
      resources :likes, only: [:create]
    end
    resources :comments, only: [:destroy]
    resources :likes, only: [:destroy]
  end
end