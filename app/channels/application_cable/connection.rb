module ApplicationCable
  class Connection < ActionCable::Connection::Base
  include ApplicationHelper
  
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
    #   def find_verified_user
    #     if verified_user = User.find_by(id: cookies.encrypted[:user_id])
    #       verified_user
    #     else
    #       reject_unauthorized_connection
    #     end
    #   end

      def find_verified_user
        token = request.params[:token]
        user_id = decode_token(token)
        if verified_user = User.find_by(id: user_id)
          p "*"*30
          p user_id
          verified_user
        else
          p "USER CONNECTION REJECTED"
          reject_unauthorized_connection
        end
      end
      
  end
end
