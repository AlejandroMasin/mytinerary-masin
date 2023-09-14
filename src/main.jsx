// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <GoogleOAuthProvider clientId="357529307520-75jue5dv4n5993eg02i8ge8do4abfhgs.apps.googleusercontent.com">
      <App />
    </ GoogleOAuthProvider>
  </Provider >
  // </React.StrictMode>,
)

//poner clave en un env 357529307520-75jue5dv4n5993eg02i8ge8do4abfhgs.apps.googleusercontent.com

