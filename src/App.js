import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Main from './Component/layout/Main';
import Cart from './Component/Cart';
import Footer from './Component/Footer'
import ErrorPage from './Component/Errorpage';
import Book from './Component/Shop'
import Quic from './Component/Quic';
import Shop from './Component/Shop';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader:()=>fetch(' https://openapi.programming-hero.com/api/quiz'),
      
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        {
          path: '/footer',
          element: <Footer></Footer>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
         
          
          
        },
        {
          path:'/quic',
          element:<Quic></Quic>
        }





      ]


    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
