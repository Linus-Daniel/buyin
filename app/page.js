"use client"
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import ProductCard from './pages/components/productCard'
import Main from './pages/main'
import { HiHeart, HiHome, HiMenuAlt1, HiSearch, HiUser } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import UserProfile from './pages/components/UserProfile'
import { FaCartPlus } from 'react-icons/fa'
export default function Home() {
  const router = useRouter()
  return (
    <main>
    <header className='p-3 flex w-full justify-between items-center'>
      <FaCartPlus />
      <p>logo</p>
    <UserProfile/>
    </header>
    <section className='relative'>

        <Main />  
    </section>

    <section className='fixed flex items-center w-full justify-evenly px-2 h-[10vh] bottom-0 left-0 right-0 bg-slate-800 bg-opacity-70 rounded-t-lg text-white' > 
      <HiHome onClick={()=>router.push("@/app/pages/login")} />
      <HiSearch />
      <HiHeart />
      <HiUser />
    </section>
    </main>
  )
}
