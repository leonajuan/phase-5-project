import User from "./User";

function Messages({ message }) {

  return (
    <div>
      <h3>{message.message}</h3>
      <p>from {message.user.first_name}</p>
    </div>
  )
}

export default Messages;