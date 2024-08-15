import React from 'react'
import Search from './Search'
import Logout from './Logout'
import Users from './Users'

function Profile() {
  return (
    <div className='w-[30%]  bg-[#283848]'>
    <Search/>
   <div style={{ minHeight: "calc(83vh)" }}>
     <Users/>
   </div>
    <Logout/>
    </div>
  )
}

export default Profile