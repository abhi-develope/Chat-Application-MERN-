import React from 'react'
import Search from './Search'
import User from './Users'
import Logout from './Logout'

function Profile() {
  return (
    <div className='w-[30%]  bg-[#283848]'>
    <Search/>
    <User/>
    <Logout/>
    </div>
  )
}

export default Profile