class LocationsController < ApplicationController
    def index
        locations = Location.all 
        render json: locations, include: [:comments], except: [:created_at, :updated_at]
    end

    def show
        location = Location.find(params[:id])
        render json: location, include: [:comments], except: [:created_at, :updated_at]
    end

    def create
        user = User.find(params['location']['user_id'])
        location = Location.create(location_params)
        render json: location, include: [:comments], except: [:created_at, :updated_at]
    end

    def update
        location = Location.find(params[:id])
        location.update(location_params)
        render json: location, include: [:comments], except: [:created_at, :updated_at]
    end

    private
    def location_params
        params.permit(:description, :picture)
    end


end
