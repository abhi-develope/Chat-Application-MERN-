import React from 'react'
import Profile from './home/leftside/Profilebox'
import Chat from './home/rightside/Chatbox'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/Authprovider'

function App() {
  const [authUser, setAuthuser]= useAuth()
  console.log(authUser);
  return (
    // <div className='flex h-screen'> 
    //   <Profile/>
    //   <Chat/>
    // </div>
    <div>
      <Signup/>
      {/* <Login/> */}
    </div>
  )
}

export default App