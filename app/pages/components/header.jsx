import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import UserProfile from './UserProfile'
import Image from 'next/image'
import logo from '@/app/assets/images/logo.png'
import Link from 'next/link'
import { cartProducts } from './datas'
import cart from '@/app/assets/images/cartIcon.png'
function Header() {
  return (
    <div>
         <header className='px-4 py-1 flex w-full  z-10  top-0 justify-between items-center'>
         <Link href={"/cart"} className='relative h-10 w-10 flex items-center justify-center   rounded-full'>
        <div className='absolute p-1 rounded-full bg-white h-5 flex items-center justify-center w-5 text-green-600 top-[5%] right-[5%]'>{cartProducts.length}</div>
      <Image src={cart} alt="cart logo" className='w-10 h-10'/>
         </Link>
      <Image src={logo} alt="Logo" className='w-24 font-lg' />
    <UserProfile />
    </header>
    </div>
  )
}

export default Header