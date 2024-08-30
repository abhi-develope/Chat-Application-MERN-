import React from 'react'
import { useAuth } from '../../context/Authprovider';
import { CiMenuFries } from "react-icons/ci";


const NoChatSelected = () => {
    const [authUser] = useAuth();
  return (
   <>
    <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
   
   
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-center">
        Welcome{" "}
        <span className="font-semibold text-white text-xl">
          {authUser.user.fullname}
        </span>
        <br />
        No chat selected, please start conversation by selecting anyone to your
        contacts
      </h1>
    </div>
    </div>
    

  
   </>
  )
}

export default NoChatSelected
