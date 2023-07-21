import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/images/loader.png'
function Loader() {
  return (
    <div className='absolute flex-col text-white top-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
        <Image src={logo} alt='Logo' className="animate-pulse" />
        <p className='bg-black bg-opacity-50 m-2 p-1 rounded-lg animate-bounce'>Kuves store</p>
    </div>
  )
}

export default Loader