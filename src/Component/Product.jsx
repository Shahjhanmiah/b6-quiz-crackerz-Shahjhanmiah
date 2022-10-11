import React from 'react'

const Product = ({book,handleAddToCart}) => {

  const { name, logo, total }=book
  return (
    <div className='bg-gray-100 p-6 rounded shadow-lg bg-slate-500'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Total:{total}</p>
      {/* <p className='text-gray-700 font-bold'>Price: {price}$</p> */}
      <button
      onClick={()=>handleAddToCart(book)}
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Product