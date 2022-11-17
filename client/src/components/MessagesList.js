import { useState, useEffect } from "react";
import Messages from "../components/Messages";

function MessagesList() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("/messages")
      .then(res => res.json())
      .then(messagesData => {
        setMessages(messagesData)
      })
  }, [])

  const messageComponents = messages.map(message => {
    return <Messages key={message.id} message={message} />
  })

  return (
    <>
      <h1 id="messages-header">Let's Get Social</h1>
      <div className="messages-div">
        {messageComponents}
      </div>
    </>
  )
}

export default MessagesList;