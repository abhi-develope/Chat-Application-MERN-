import React from "react";
import { GrSend } from "react-icons/gr";

function MessageInput() {
  return (
    <>
    <div className="flex space-x-6 items-center pl-6 bg-slate-700 py-2">
    <div className="w-[60%] ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full  "
      />
       </div>
    <GrSend className="text-4xl text-[#ff0000] " />
    </div>
   
    </>
  );
}

export default MessageInput;
