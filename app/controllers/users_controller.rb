class UsersController < ApplicationController

  def index
    users = User.all 
    render json: user, status: :ok
  end

  def show
  end

end
