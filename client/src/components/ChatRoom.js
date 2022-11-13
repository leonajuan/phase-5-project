import { useState, useEffect } from "react";
import { createConsumer } from "@rails/actioncable";
const consumer = createConsumer("http://localhost:3000/cable?token=" + localStorage.getItem("token"))

function ChatRoom({ user }) {

  const [messages, setMessages] = useState([])
  const [channel, setChannel] = useState(null)
  const [messageInput, setMessageInput] = useState("")

  useEffect(() => {
    console.log(consumer)
    // consumer.subscriptions.create({ channel: "ChatChannel", room: "Test Room" })
    const newChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "Test Room" },
      {
        initialized: () => {
          console.log('channel attempting to load')
        },
        received: (data) => {
          console.log(data)
          setMessages(oldMessages => [...oldMessages, data])
        }
      })
    console.log('Channel', newChannel)
    setChannel(newChannel)
  }, [])

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    channel.send({ content: messageInput })
    setMessageInput("")
  }

  return (
    <div>
      <h3 className="chatroom-label">Chat Room:</h3>
      {messages.map((message, i) => <p key={i}>{message.content}</p>)}
      <form className="chatroom" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your message here..." value={messageInput} onChange={handleMessageInputChange} />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ChatRoom;