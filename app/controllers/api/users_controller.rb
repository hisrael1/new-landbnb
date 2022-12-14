class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            log_in!(@user)
            render "api/users/show"
        else
            render json: @user.errors, status: 422
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user
            render "api/users/show"
        else
            render json: @user.errors
        end 
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
