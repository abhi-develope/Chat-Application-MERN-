import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import useSendMessage from "../../context/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("")
  const {loading, sendMessages} = useSendMessage();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMessages(message)
    setMessage("")
  }
  return (
    <>
    <form onSubmit={handleSubmit} >
    <div className="flex space-x-6 items-center pl-6 bg-slate-700 py-2">
    <div className="w-[60%] ">
      <input
        type="text"
        placeholder="Type here"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        className="input input-bordered input-secondary w-full  "
      />
       </div>
    <button>
    <GrSend className="text-4xl text-white " />
    </button>
    </div>
    </form>
   
    </>
  );
}

export default MessageInput;
