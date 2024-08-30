import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import useGetAllUsers from "../../context/useAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handelSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    const conversation = allUsers.find((user)=>user.fullname.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("User not found")
    }
  }
  return (
    <form onSubmit={handelSubmit}>
      <div className="flex items-center space-x-3 justify-center pt-2 z-50">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button>
        <ImSearch className="text-3xl text-[#00ffff] cursor-pointer" />
        </button>
      </div>
    </form>
  );
}

export default Search;
