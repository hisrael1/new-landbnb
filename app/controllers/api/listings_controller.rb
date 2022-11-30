class Api::ListingsController < ApplicationController
    def index 
        @listings = Listing.all
        if @listings
            render :index
        end
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages
        end
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        if @listing
            render :show
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.destroy
            render json: @listing
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.update(listing_params)
            render json: @listing
        else
            render json: @listing.errors
        end
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :description, :host_id, :address, :city, :state, :lat, :lng, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night)
        # params.require(:listing).permit(:title, :description, :host_id, :address, :city, :state, :lat, :lng, :zipcode, :num_beds, :num_baths, :max_num_guests, :price_per_night, photos: [])
    end
end
