import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Main from './Component/layout/Main';


 

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
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
