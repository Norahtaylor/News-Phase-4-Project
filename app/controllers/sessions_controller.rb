class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :destroy]

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: "Invalid Username or Password", status: :unauthorized
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