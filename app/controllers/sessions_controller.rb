class SessionsController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create]

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: "Invalid Username or Password"
        end 
    end 

    def destroy 
            user = User.find_by(id: session[:user_id])
        if user
            session.delete :user_id
            head :no_content
        end 
    end
    
end 