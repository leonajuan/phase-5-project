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
    <div>
      {messageComponents}
    </div>
  )
}

export default MessagesList;