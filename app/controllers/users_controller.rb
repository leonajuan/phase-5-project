class UsersController < ApplicationController

  def index
    users = User.all 
    render json: user, status: :ok
  end

  def login
    user = User.find_by(username: params[:username]).try(:autheticate, params[:password])
    if user 
      token = generate_token(user_id)
      render json: { user: user, token: token }, status: :ok
    else
      render json: { error: "Invalid password" }, status: :unauthorized
    end
  end

  def profile
    token = request.headers["token"]
    user_id = decode_token(token)
    user = User.find_by(id: user_id)
    if user
      render json: user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update_bio
    token = request.headers["token"]
    user_id = decode_token(token)
    user = User.find(user_id)
    if user
      user.update(bio: params[:bio])
      render json: user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def destroy
    token = request.headers["token"]
    user_id = decode_token(token)
    user = User.find(user_id)
    if user
      user.destroy
      render json: {}, status: :no_content
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :username, :password, :bio, :image)
  end

end
