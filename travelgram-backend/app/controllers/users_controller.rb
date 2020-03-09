class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users, include: [:locations, :comments], except: [:created_at, :updated_at]
    end
    
    def show
        user = User.find(params[:id])
        render json: user, include: [:locations, :comments], except: [:created_at, :updated_at]
    end


end
