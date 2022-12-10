import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

const Product = ({book}) => {
  const { name, logo, total,id }=book
  const navigate = useNavigate()
        const hadleNavigate =()=>{
           navigate(`/quic/${id}`) 
        }
  return (
    <div className='bg-gray-100 p-6 rounded shadow-lg bg-slate-500  transition:0.5 ease-out hover:translate-x-2 transform'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Total:{total}</p>
      {/* <p className='text-gray-700 font-bold'>Price: {price}$</p> */}
      <button
       onClick={hadleNavigate}
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400 flex gap-10  justify-center'
       
      >
        <h1> Start</h1>
        <p><i class="fa-solid fa-right-long"></i></p>
       
      </button>

      
    </div>
  )
}

export default Product