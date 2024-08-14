import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie';


export const AuthContext = createContext()

export const Authprovider = ({children}) => {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("chatApp")

    //parse the user data and storing in state.
    const [authuser, setAuthUser] = useState(initialUserState? JSON.parse(initialUserState): undefined)
  return (
    <AuthContext.Provider value={[authuser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
   
  )
}

export  const useAuth = () =>useContext(AuthContext);