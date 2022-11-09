function ChatRoom() {
  return (
    <div>
      <h3 className="chatroom-label">Chat Room:</h3>
      <form className="chatroom">
        <input type="text" placeholder="Type your message here..." />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ChatRoom;