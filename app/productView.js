import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import image from '@/app/assets/images/NicePng_bank-png_2237554.png'
import { FaArrowLeft, FaCartPlus, FaHeart, FaMinus, FaPlus } from 'react-icons/fa'

function ProductView() {
  return (
    <main>
      <div className='container  bg-gray-200 h-screen'>
          <section className='image flex-col px-5 py-4 flex justify-center h-[40vh] '>
          <header className='flex justify-between px-3'>
          <FaArrowLeft className='shadow-sm text-5xl rounded-sm bg-white text-slate-500 p-2'/>
          <FaCartPlus className='shadow-sm text-5xl rounded-sm bg-white text-slate-500 p-2'/>
          </header>
            <Image src={image} alt='image' className='w-[80%]'/>
          </section>
          <section className='Details bg-white px-3 pt-10 h-full rounded-t-3xl '>
            <div className='flex items-center justify-between px-5'>
            <section>

              <h3 className='font-bold text-lg'>product Name</h3>
              <p className='font-semibold text-md text-red-500'>price</p><span className='[text-decoration:line-through;] text-gray-400 '>Discount</span>
            </section>
            <div className='favorite'>
                <FaHeart size={40} className='rounded-lg bg-red-100 text-gray-400 p-2' />
            </div>
            </div>
          </section>
          <div className=' fixed h-[8%] bg-gray-300 w-full justify-between bottom-0 p-1 items-center flex'>
            <div className='flex px-2 w-[30%] justify-between'>
              <FaMinus /> <p> hello</p><FaPlus />
            </div>
            <div className='flex w-[70%] justify-around items-center'>
              <section className='Buy Now bg-green-500 text-semibold text-white p-2 rounded-lg'>Buy Now</section>
              <section className='addToCart font-semibold text-white bg-red-500 p-2 rounded-lg '> Add to cart </section>
            </div>
          </div>
      </div>
    </main>
  )
}

export default ProductView