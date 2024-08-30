import React from "react";

const Messages = ({message}) => {
  const authUser = JSON.parse(localStorage.getItem("chatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "chat-bubble-success" : ""

  const createdAt = new Date(message.createdAt)
  const formattedTime = createdAt.toLocaleTimeString([],{
    hour: '2-digit',
    minute: '2-digit'
  })
  return (
    <div>
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}> {message.message}
        </div>
        <div className="chat-footer">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Messages;
