class RatingsController < ApplicationController

  def index
    ratings = Rating.all 
    render json: ratings, status: :ok
  end

  def show
    rating = Rating.find_by(id: params[:id])
    if rating
      render json: rating, status: :ok
    else
    end
  end

  def create
    rating = Rating.create(rating_params)
    if rating.valid?
      render json: rating, status: :created
    else
      render json: { errors: rating.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def rating_params
    params.permit(:user_id, :music_id, :rating, :comment)
  end

end
