import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
//import Header from "./components/Header/Header"
//import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home"
import Cities from "./pages/Cities/Cities"
import Layout from './layouts/Layout'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./pages/Error404/Error404"
import City from "./pages/City/City"
import Usuarios from "./components/Usuarios/Usuarios"
// import UnderConstruction from "./components/UnderConstruction/UnderConstruction"
// import Cities2 from "./pages/Cities2/Cities2"

const router = createBrowserRouter([
  {
    path:'/', element: <Layout />,
    children:[
      {
        path:'/', element:<Home />,
      },
      {
        path:'/cities', element:<Cities />,
      },
      {
        path:'/cities/city/:id', element:<City />,
      },
      {
        path:'/test/usuarios', element:<Usuarios />,
      },
      {
        path:'*', element:<Error404 />,
      }
    ]
  }
])

function App() {

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
