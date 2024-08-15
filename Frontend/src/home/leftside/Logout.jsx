import React, { useState } from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios"
import Cookies from "js-cookie"

function Logout() {
  const[loading, setLoading] = useState(false);
  const handleLogout = async ()=>{
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("chatApp")
      Cookies.remove("jwt");
      setLoading(false);
      alert("logged out successfully")
      window.location.reload();
    } catch (error) {
      console.log("error in logout", error);
      
    }
  }
  return (
    <div className='bg-black h-12 p-3 font-bold text-2xl text-[rgb(255,0,0)] cursor-pointer' onClick={handleLogout} >
        <BiLogOutCircle />
    </div>
  )
}

export default Logout