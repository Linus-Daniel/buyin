import React from 'react'
import BottomMain from '../layouts/BottomMain'
import image from '@/app/assets/images/user.png'
import Image from 'next/image'
import UserProfile from '../pages/components/UserProfile'

function User() {
  return (
    <BottomMain>

    <div>
    {/* User Properties */}
      <section>
      <UserProfile />
      </section>
      {/* Set Up */}
      <section>
        <ul>
          <li>Edit Profile </li>
          <li></li>
        </ul>
      </section>
    </div>
    </BottomMain>
  )
}

export default User