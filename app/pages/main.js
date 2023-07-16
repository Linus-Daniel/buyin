import React from 'react'
import ProductCard from './components/productCard'
import { categories, data } from './components/datas'

function Main() {
  return (
    <main>
    <section className='text-gray-400 flex text-3xl justify-evenly '>
        {categories.map((item)=><div key={Math.random()} className=' hover:bg-orange-400 flex  flex-col justify-center items-center p-2 rounded-md hover:text-white'>{item.icon}<p className='text-xs' >{item.name}</p></div>)}
    </section>
    <div className='font-poppins justify-center p-0 flex flex-wrap' > {data.map((product)=><ProductCard key={product.name} image={product.image} price={product.price} name={product.name} />)}</div>
    </main>
  )
}

export default Main
