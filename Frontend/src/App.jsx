import React from 'react'
import Profile from './home/leftside/Profilebox'
import Chat from './home/rightside/Chatbox'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
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