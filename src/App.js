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
import Question from './Component/Question';
import Blog from './Component/Blog'




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
          element:<Shop></Shop>,  
          
        },
        {
          path:'/quic',
          loader:()=>fetch(' https://openapi.programming-hero.com/api/quiz'),
          element:<Quic></Quic>
        },
        {
          path:'/blog',
          loader: () => fetch(''),
          element:<Blog></Blog>

        },
        {
          path:'/quic/:quizId',
          loader:async({params})=>{
            console.log(params.quizId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Question></Question>,
        }
        



      ]
      

      

    },
    
    
   
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
