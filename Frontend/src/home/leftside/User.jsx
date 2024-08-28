import React from "react";
import useConversation from "../../zustand/useConversation.js";
import {useSocketContext} from "../../context/SocketContext.jsx"

function User({user}) {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket, onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(user._id)
  return (
    <div className={`hover:bg-slate-700 duration -300 ${isSelected ? "bg-slate-600": ""}`} onClick={()=> setSelectedConversation(user)}>
      <div className="flex space-x-4 p-4 cursor-pointer ">
      <div className={`avatar ${isOnline?"online": ""}`} >
          <div className="w-16 rounded-full">
            <img src="../img/dpimage.jpg" />
          </div>
        </div>
        <div>
          <p className="text-white ">{user.fullname}</p>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
