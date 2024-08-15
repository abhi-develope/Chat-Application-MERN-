import React from "react";
import User from "./User";
import useAllUsers from "../../context/useAllUsers";

function Users() {
  const [allUsers,loading] = useAllUsers()
  console.log(allUsers);
  return (
    <div>
      <p className="px-2 py-1 bg-slate-400 text-white mt-2">Messages</p>
      <div className="overflow-y-auto cool-scrollbar" style={{ maxHeight: "calc(78vh)" }}>
        
        {allUsers.map((user,index)=>(
          <User key={index} user={user}/>
        ))}
      </div>
    </div> 
  );
}

export default Users;
