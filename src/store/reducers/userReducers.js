import { createReducer } from "@reduxjs/toolkit";
import { cargarUsuario, signUp, signIn, signInWhitToken, logout } from "../actions/userActions";

const initialState = {
    // user: 
    //     {
    //         "email": null,
    //         "password": null,
    //         "image": null,
    //         "name": null,
    //         "lastname": null,
    //         "country": null,
    //         "is_online": false
    //     },
    user: null,
    token: null
}



export const userReducer = createReducer(initialState, (builder) =>
    builder
        .addCase( cargarUsuario, (stateActual, action) => {
            return {
                ...stateActual,
                user: action.payload
            }
        })
        .addCase(signUp.fulfilled, (stateActual,action) => {
            return {
                ...stateActual,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(signIn.fulfilled, (stateActual,action) => {
            return {
                ...stateActual,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(signInWhitToken.fulfilled, (stateActual,action) => {
            return {
                ...stateActual,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        // .addCase(logout, (stateActual) => {
        //     return {
        //         ...stateActual,
        //         user: null,
        //         token: null
        //     }
        // })
        .addCase(logout.fulfilled, (stateActual) => {
            return {
                ...stateActual,
                user: null,
                token: null
            }
        })
)