// import Friend from "./Friend";

function Messages({ message }) {

  return (
    <div>
      <ul className="messages-list">
        <img src={message.user.image} />
        <li id="message-username">from @{message.user.username}</li>
        <li id="message-content">{message.message}</li>
      </ul>
      {/* <h3>{message.message}</h3>
      <p>from @{message.user.username}</p> */}
    </div>
  )
}

export default Messages;