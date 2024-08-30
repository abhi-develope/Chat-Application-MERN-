import React from "react";
import useConversation from "../../zustand/useConversation.js"
import {useSocketContext} from "../../context/SocketContext.jsx"
import { CiMenuFries } from "react-icons/ci";
function Toppart() {
  const {selectedConversation} = useConversation();
  // console.log(selectedConversation);
  const {onlineUsers} = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  }

  const isOnline = onlineUsers.includes(selectedConversation._id);


  return (
    <>
    <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>


    <div className="w-full justify-center bg-slate-600 items-center flex space-x-2 p-1  ">
      <div className={`avatar ${isOnline?"online z-0": ""}`}>
        <div className="w-20 rounded-full">
          <img src="../img/dp2.jpg" />
        </div>
      </div>
      <div>
          <p className="text-white ">{selectedConversation.fullname}</p>
          <p className={`text-sm ${isOnline?"text-blue-400" : "text-black"}`}>{getOnlineUsersStatus(selectedConversation._id)}</p>
        </div>
    </div>
    </div>
    </>
    
  );
}

export default Toppart;
