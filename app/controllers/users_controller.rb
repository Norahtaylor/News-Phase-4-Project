class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :index, :show]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    user = User.find_by(id: session[:user_id])
    render json: user, status: :created 
  end

  # POST /users
 def create 
    user = User.create!(user_params)
      if user.valid?
    session[:user_id] = user.id
      render json: user, status: :created
      end 
    end 


  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :username, :password)
    end

end
