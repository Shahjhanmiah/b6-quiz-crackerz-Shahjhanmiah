import React, { useContext, useState } from 'react'
import { BookDataContext } from './layout/Main';
import Product from './Product';

const Shop = () => {
  const bookData= useContext(BookDataContext);
  const [cart,setCart] =useState([])
  

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 hover:fill-yellow-800'>
        {
          bookData.map(book=><Product
          key={book.id}
          book={book}
         ></Product>)
        }
      </div>
    </div>
  )
}

export default Shop;