import React from "react";

const Messages = () => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin,
          <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">You underestimate my power!</div>
      </div>
    </div>
  );
};

export default Messages;
