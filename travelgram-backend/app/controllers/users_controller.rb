class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users, include: [:locations, :comments]
    end

end
