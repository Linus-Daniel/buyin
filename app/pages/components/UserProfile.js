import Image from 'next/image'
import React from 'react'
import userImage from '@/app/assets/images/user.png'

function UserProfile() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <Image src={userImage} alt=" userImage" className='h-10 w-10 rounded-full' />
        <p className='text-xs' >Mary kuve</p>
    </div>
  )
}

export default UserProfile