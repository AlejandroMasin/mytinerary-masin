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
import Register from "./components/Register/Register"
import SignIn from "./components/SignIn/SignIn"
// import UnderConstruction from "./components/UnderConstruction/UnderConstruction"
// import Cities2 from "./pages/Cities2/Cities2"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cities',
        element: <Cities />,
      },
      {
        path: '/cities/city/:id',
        element: <City />,
      },
      {
        path: '/test/usuarios',
        element: <Usuarios />,
      },
      {
        path: '*', // Cualquier otra ruta dentro de Layout
        element: <Error404 />,
      },
    ],
  },
  // Pongo SignIn y Register fuera de Layout
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);


function App() {

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
