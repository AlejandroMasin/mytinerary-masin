import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
//import Header from "./components/Header/Header"
//import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home"
import Cities from "./pages/Cities/Cities"
import Layout from './layouts/Layout'

import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import Error404 from "./pages/Error404/Error404"
import City from "./pages/City/City"
import Usuarios from "./components/Usuarios/Usuarios"
import Register from "./components/Register/Register"
import SignIn from "./components/SignIn/SignIn"
// import UnderConstruction from "./components/UnderConstruction/UnderConstruction"
// import Cities2 from "./pages/Cities2/Cities2"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { signInWhitToken } from "./store/actions/userActions"
// import {userReducer} from "./store/reducers/userReducers"
// import { store } from "./store/store"

const ProtectedRoute = () => {
  const is_online = useSelector(store => store.user)
  if (is_online) {
    return <Outlet />
  }

  console.log("is_online", is_online);
  return <Navigate to={"/"} />
}

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
  // {
  //   path: '/register',
  //   element: <Register />,
  // },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path:'register',
        element: <Register />,
      }
    ]
  },
]);


function App() {

  const dispatch = useDispatch()

  useEffect( () => {
    const token = localStorage.getItem("token")
    if (token) {
      dispatch(signInWhitToken())
    }
  })

  return (
    <>

      <RouterProvider router={router} />
      <ToastContainer />

    </>
  )
}

export default App
