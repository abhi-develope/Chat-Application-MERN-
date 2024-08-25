import React from 'react'
import { useAuth } from '../../context/Authprovider';

const NoChatSelected = () => {
    const [authUser] = useAuth();
  return (
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
  
  )
}

export default NoChatSelected
