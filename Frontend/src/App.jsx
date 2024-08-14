import React from 'react'
import Profile from './home/leftside/Profilebox'
import Chat from './home/rightside/Chatbox'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/Authprovider'
import { Navigate, Route, Routes } from "react-router-dom"

function App() {
  const [authUser, setAuthuser]= useAuth()
  console.log(authUser);
  return (
    
    <Routes>
      <Route path="/" element={authUser? (<div className='flex h-screen'> 
      <Profile/>
      <Chat/>
    </div>): (<Navigate to={"/login"}/>)}/>
    <Route path='/login' element={authUser? <Navigate to="/"/>:<Login/>} />
    <Route path='/signup'element={authUser? <Navigate to="/"/>: <Signup/>} />
    </Routes>


  )
}

export default App