import React from "react";

const Messages = ({message}) => {
  const authUser = JSON.parse(localStorage.getItem("chatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "chat-bubble-success" : ""
  return (
    <div>
      {/* <div className={`chat ${chatName}`}>
        <div className="chat-bubble">
         hi Abhishek
        </div>
      </div> */}
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}> {message.message}
        </div>
      </div>
    </div>
  );
};

export default Messages;
