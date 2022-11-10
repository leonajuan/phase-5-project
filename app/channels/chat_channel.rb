class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "chat_#{params[:room]}"
    ActionCable.server.broadcast("chat_#{params[:room]}", { content: "Someone has entered the room" })
  end

  def unsubscribed
    puts "Someone unsubscribed"
    stop_all_streams
  end

end