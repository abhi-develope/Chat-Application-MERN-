import React from "react";
import Toppart from "./Toppart";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function Chat() {
  return <div className=" w-[70%]  bg-[hsl(50,5%,77%)] ">
    <Toppart/> 
    <div className="overflow-y-auto cool-scrollbar" style={{ maxHeight: "calc(77vh)" }}>
    <Messages/>
    <Messages/>
    <Messages/>
    <Messages/>
    <Messages/>
    </div>
    <MessageInput/>
    
  </div>
}
 
export default Chat;
