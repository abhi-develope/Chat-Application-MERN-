import React from "react";

const Messages = ({message}) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">
         hi Abhishek
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success"> {message.message}
        </div>
      </div>
    </div>
  );
};

export default Messages;
