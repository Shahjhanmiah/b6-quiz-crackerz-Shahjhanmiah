import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header';
export const BookDataContext  = createContext([])
export const CartContext =createContext([])


const Main = () => {
    const book =useLoaderData()
    const bookData = book.data;
    console.log(bookData);
  
    return (
       <BookDataContext.Provider value={bookData}>
        
            <Header></Header>
            <Outlet></Outlet>
           
       </BookDataContext.Provider>
    );
}; 

export default Main;