import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import UserProfile from './UserProfile'
import Image from 'next/image'
import logo from '@/app/assets/images/logo.png'
function Header() {
  return (
    <div>
         <header className='px-4 py-1 flex w-full  z-10  top-0 justify-between items-center'>
      <FaCartPlus />
      <Image src={logo} alt="Logo" className='w-24 font-lg' />
    <UserProfile />
    </header>
    </div>
  )
}

export default Header