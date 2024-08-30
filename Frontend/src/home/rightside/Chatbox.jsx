import React, { useEffect, useRef } from "react";
import Toppart from "./Toppart";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import useConversation from "../../zustand/useConversation.js";
import NoChatSelected from "./NoChatSelected.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

function Chat() {
  const { loading, messages } = useGetMessage();
  // console.log(messages);
  useGetSocketMessage(); // listing incoming messages
  

  // for scrolling automated msg
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  // default component when no conversation selected

  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className=" w-full bg-[hsl(60,2%,34%)] ">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Toppart />
            <div
              className="overflow-y-auto cool-scrollbar"
              style={{ maxHeight: "calc(77vh)" }}
            >
              <div style={{ minHeight: "calc(83vh)" }}>
                {loading ? (
                  <Loading />
                ) : (
                  messages.length > 0 &&
                  messages.map((message, index) => (
                    <div key={message._id || index} ref={lastMsgRef}>
                      <Messages message={message} />
                    </div>
                  ))
                )}

                {!loading && messages.length === 0 && (
                  <div>
                    <p className="text-center mt-[20%] text-black">
                      Say! Hi to start the conversation
                    </p>
                  </div>
                )}
              </div>
            </div>
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
}

export default Chat;
