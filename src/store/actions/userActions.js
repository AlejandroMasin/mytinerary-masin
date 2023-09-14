import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarUsuario = createAction('cargar_usuario', (user) => {
    return {
        payload: user
    }
})

export const signUp = createAsyncThunk('create_user', async (body) => {
    try {
        const response = await axios.post('http://localhost:4000/api/signUp', body)

        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        console.log(error);
    }
})

export const signIn = createAsyncThunk('loguear', async (body) => {
    try {
        const response = await axios.post('http://localhost:4000/api/signIn', body)

        // Verifico si response.data.token no es undefined antes de guardarlo en el localStorage
        if (response.data.token !== undefined) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('email', response.data.user.email)
        }

        return response.data
    } catch (error) {
        console.log(error);
    }
})


export const signInWhitToken = createAsyncThunk('loguear_token', async () => {
    try {
        const token = localStorage.getItem('token')

        const response = await axios.post('http://localhost:4000/api/signIn/token', {}, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return {
            user: response.data.user,
            token: token
        }
    } catch (error) {
        console.log(error);
    }
})

// export const logout = createAction("reset", () => {
//     localStorage.removeItem('token')
//     return {
//         payload: null
//     }
// })

// export const logout = createAsyncThunk('reset', async (body) => {
//     try {
//       // Lógica para realizar el logout en el servidor, si es necesario
//       // Puedes enviar una solicitud al servidor para invalidar la sesión, por ejemplo
//       await axios.post('http://localhost:4000/api/signOut', body)
//       // Eliminar el token del localStorage
//       localStorage.removeItem('token');

//       // Retornar null como resultado de logout
//       return null;
//     } catch (error) {
//       console.log(error);
//       throw error; // Puedes propagar el error si es necesario
//     }
//   });

export const logout = createAsyncThunk('reset', async () => {
    try {
      // Crear un objeto con los datos de usuario que deseas enviar en el cuerpo de la solicitud
      const userData = {
        email: localStorage.getItem('email')
      };

    //   const userEmail = localStorage.getItem('email')
  
      // Realizar la solicitud POST y enviar el objeto userData en el cuerpo
      const response = await axios.post('http://localhost:4000/api/signOut', userData);
  
      console.log(response);
  
      // Eliminar el token del localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('email');

      // Retornar null como resultado de logout
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Puedes propagar el error si es necesario
    }
  });
  