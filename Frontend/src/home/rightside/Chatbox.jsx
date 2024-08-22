import React from "react";
import Toppart from "./Toppart";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx"

function Chat() {
  const {loading, messages} = useGetMessage();
  console.log(messages);
  return <div className=" w-[70%]  bg-[hsl(50,5%,77%)] ">
    <Toppart/> 
    <div className="overflow-y-auto cool-scrollbar" style={{ maxHeight: "calc(77vh)" }}>
    <div style={{ minHeight: "calc(83vh)" }}>

      {loading?(<Loading/>):(messages.length > 0 && messages.map((message)=>(<Messages key={message._id} message={message}/>)))}

      {!loading && messages.length ===0 && (
        <div>
          <p className="text-center mt-[20%] text-black">Say! Hi to start the conversation</p>
        </div>
      )}
     
   </div>
    
    </div>
    <MessageInput/>
    
  </div>
}
 
export default Chat;
