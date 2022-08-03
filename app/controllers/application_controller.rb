class ApplicationController < ActionController::API
    before_action :authenticate_user
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end 

    private

    def authenticate_user 
    # when our user isnt logged in, use this method to limit their accessability 
        render json: {errors: "Not Authorized"} unless current_user
    end 

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 

     def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end 
end
