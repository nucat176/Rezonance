Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :create, :show, :update, :destroy]
  end

  root "static_pages#root"
end
