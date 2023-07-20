import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import UserProfile from './UserProfile'
function Header() {
  return (
    <div>
         <header className='px-4 py-1 flex w-full  z-10  top-0 justify-between items-center'>
      <FaCartPlus />
      <p>logo</p>
    <UserProfile />
    </header>
    </div>
  )
}

export default Header