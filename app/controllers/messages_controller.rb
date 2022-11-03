class MessagesController < ApplicationController

  def index
    messages = Message.all 
    render json: messages, status: :ok
  end

  def show
    message = Message.find_by(id: params[:id])
    if message
      render json: message, status: :ok
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end

  def create
    message = Message.create(message_params)
    if message.valid?
      render json: message, status: :created
    else
      render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  
  def message_params
    params.permit(:user_id, :message)
  end

end
