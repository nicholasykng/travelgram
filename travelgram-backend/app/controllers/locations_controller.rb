class LocationsController < ApplicationController
    def index
        locations = Location.all 
        render json: locations, include: [:comments], except: [:created_at, :updated_at]
    end

    def show
    end

    def create
    end

    def update
    end

end
