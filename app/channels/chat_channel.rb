class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "chat_#{params[:room]}"
    ActionCable.server.broadcast("chat_#{params[:room]}", { content: "#{current_user.first_name} has entered the #{params[:room]}" })
  end

  def receive(data)
    message = Message.create(message: data['message'], user: current_user)
    ActionCable.server.broadcast("chat_#{params[:room]}", message)
  end

  def unsubscribed
    puts "Someone unsubscribed"
    stop_all_streams
  end

end