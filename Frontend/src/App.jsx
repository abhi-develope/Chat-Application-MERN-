import React from 'react'
import Profile from './home/leftside/Profilebox'
import Chat from './home/rightside/Chatbox'

function App() {
  return (
    <div className='flex h-screen'> 
      <Profile/>
      <Chat/>
    </div>
  )
}

export default App