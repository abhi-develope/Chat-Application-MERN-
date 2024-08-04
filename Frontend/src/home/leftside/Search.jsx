import React from 'react'
import { ImSearch } from "react-icons/im";

function Search() {
  return (
    <div className='flex items-center space-x-3 justify-center pt-2 '>
       <input
  type="text"
  placeholder="Search"
  className="input input-bordered input-secondary w-full max-w-xs" /> 
      <ImSearch className='text-3xl text-[#00ffff] cursor-pointer' />
    </div>
  )
}

export default Search